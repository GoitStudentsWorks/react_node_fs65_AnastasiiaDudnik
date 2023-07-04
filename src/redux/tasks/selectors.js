export const selectTasks = state => state.tasks.tasks;

export const selectCurrentTask = state => state.tasks.currentTask;

export const selectIsRefreshing = state => state.tasks.isRefreshing;

export const selectError = state => state.tasks.error;
