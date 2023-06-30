import React from 'react';
import { Box } from '@mui/material';
import ColumnsTasksList from './ColumnsTasksList/ColumnsTasksList';
import ColumnHeadBar from './ColumnHeadBar/ColumnHeadBar';
import AddTaskBtn from './AddTaskBtn/AddTaskBtn';

const TasksColumn = ({ headName, tasks, addCategory }) => {
  return (
    <Box
      component="li"
      sx={{
        padding: 18,
        backgroundColor: 'var(--primary-background-color)',
        borderRadius: 8,
        minWidth: '100%',
        '@media screen and (min-width: 375px)': {
          minWidth: 345,
        },
        '@media screen and (min-width: 768px)': {
          width: 'calc((100% - 54px) / 3)',
        },
      }}
    >
      <ColumnHeadBar headName={headName} addCategory={addCategory} />
      {tasks && <ColumnsTasksList tasks={tasks} />}
      <AddTaskBtn addCategory={addCategory} />
    </Box>
  );
};

export default TasksColumn;
