import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} from './operations';
import { logout } from '../../redux/auth/operations';

const extraActions = [
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
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
  tasks: [],
  currentTask: null,
  isRefreshing: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(getTaskById.fulfilled, (state, action) => {
        state.currentTask = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.currentTask = action.payload;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        if (state.tasks.length > 0) {
          const index = state.tasks.findIndex(
            task => task._id === action.payload._id
          );
          state.tasks.splice(index, 1);
          state.tasks.push(action.payload);
        }
        state.currentTask = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(
          task => task._id === action.payload._id
        );
        state.tasks.splice(index, 1);
        state.currentTask = null;
      })
      .addCase(logout.fulfilled, state => {
        state.tasks = [];
        state.currentTask = null;
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

export const tasksReducer = tasksSlice.reducer;
