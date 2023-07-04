import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addReview,
  deleteReview,
  getReviews,
  getUserReview,
  updateReview,
} from './operations';
import { logout } from '../../redux/auth/operations';

const extraActions = [
  addReview,
  deleteReview,
  getReviews,
  getUserReview,
  updateReview,
  logout,
];

const handlePending = state => {
  state.isRefreshing = true;
};
const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const initialState = {
  reviews: [],
  userReview: null,
  isRefreshing: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(getUserReview.fulfilled, (state, action) => {
        state.userReview = action.payload;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.userReview = action.payload;
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        if (state.reviews.length > 0) {
          const index = state.reviews.findIndex(
            review => review._id === action.payload._id
          );
          state.reviews.splice(index, 1);
          state.reviews.push(action.payload);
        }
        state.userReview = action.payload;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        const index = state.reviews.findIndex(
          review => review._id === action.payload._id
        );
        state.reviews.splice(index, 1);
        state.userReview = null;
      })
      .addCase(logout.fulfilled, state => {
        state.userReview = null;
      })
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.rejected)),
        handleRejected
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.fulfilled)),
        state => {
          state.isRefreshing = false;
          state.error = null;
        }
      );
  },
});

export const reviewsReducer = reviewsSlice.reducer;
