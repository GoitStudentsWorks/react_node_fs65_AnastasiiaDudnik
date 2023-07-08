import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
  getWeekTasks,
  getTasksStatistics,
} from './operations';
import { logout } from '../../redux/auth/operations';

const extraActions = [
  getTasks,
  getWeekTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
  logout,
  getTasksStatistics,
];

const handlePending = state => {
  state.isRefreshing = true;
};
const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const initialState = {
  tasksStatistics: {},
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
      .addCase(getTasksStatistics.fulfilled, (state, action) => {
        state.tasksStatistics = action.payload;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(getWeekTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(getTaskById.fulfilled, (state, action) => {
        state.currentTask = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.tasks.push(action.payload);
        state.currentTask = action.payload;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        if (state.tasks.tasks.length > 0) {
          const index = state.tasks.tasks.findIndex(
            task => task._id === action.payload._id
          );
          state.tasks.tasks.splice(index, 1);
          state.tasks.tasks.push(action.payload);
        }
        state.currentTask = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        // const index = state.tasks.findIndex(
        //   task => task._id === action.payload._id
        // );
        // state.tasks.splice(index, 1);
        state.tasks.tasks = state.tasks.tasks.filter(
          task => task._id !== action.payload._id
        );

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
