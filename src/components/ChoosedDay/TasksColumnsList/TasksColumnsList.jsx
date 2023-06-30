import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TasksColumn from './TasksColumn/TasksColumn';

const TasksColumnsList = ({ readinessTasks }) => {
  const { i18n } = useTranslation();

  return (
    <Box
      component="ul"
      sx={{
        display: 'flex',
        padding: 0,
        paddingBottom: 44,
        gap: 16,
        overflow: 'auto',
        width: '100%',
        cursor: 'default',
        '@media screen and (min-width: 1440px)': {
          gap: 27,
        },
        '::-webkit-scrollbar': {
          width: 12,
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: 'var(--scrollbar-bg-color)',
          borderRadius: 12,
        },
        '::-webkit-scrollbar-thumb': {
          borderRadius: 12,
          backgroundColor: 'var(--scrollbar-color)',
        },
        '::-webkit-scrollbar-track:hover': {
          boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <TasksColumn
        headName={i18n.language === 'en' ? 'To do' : 'Зробити'}
        tasks={readinessTasks.todotasks}
        addCategory="to-do"
      />

      <TasksColumn
        headName={i18n.language === 'en' ? 'In progress' : 'В процесі'}
        tasks={readinessTasks.inprogresstasks}
        addCategory="in-progress"
      />

      <TasksColumn
        headName={i18n.language === 'en' ? 'Done' : 'Зроблено'}
        tasks={readinessTasks.donetasks}
        addCategory="done"
      />
    </Box>
  );
};

export default TasksColumnsList;
