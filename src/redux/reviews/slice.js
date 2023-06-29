import { createSlice } from '@reduxjs/toolkit';
import { getReviews } from './operations';

const initialState = {
  reviews: [],
  isRefreshing: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getReviews.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isRefreshing = false;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
