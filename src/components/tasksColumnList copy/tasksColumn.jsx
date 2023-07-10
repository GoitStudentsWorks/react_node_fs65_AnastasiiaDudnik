import { Box, Typography } from '@mui/material';
import AddTaskBtn from 'components/addTaskBtn/addTaskBtn';
import { useState } from 'react';
import TasksColumnList from 'components/tasksColumnList/tasksColumnList';
import React from 'react';
import TaskModal from 'components/taskModal/taskModal';

export default function TasksColumn({ title, todos, date, category, mode }) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const panelSetts = {
    marginBottom: '28px',
  }
  if (todos.length === 0) { panelSetts.marginBottom = { xs: '64px', md: '28px' } }
  else { panelSetts.marginBottom = '28px' }

  return (
    <Box sx={{ ...style.listTodos, bgcolor: mode === 'light' ? '#21222C' : '#FFFFFF' }}>
      <Box sx={{ ...style.addPanel, ...panelSetts }}>
        <Typography sx={{...style.titleText, color: mode === 'light' ? '#FFF' : '#111'}}>{title}</Typography>
        <AddTaskBtn openModal={openModal} mode={mode}/>
      </Box>

      <TasksColumnList todos={todos} mode={mode} />

      <Box sx={style.btnAdd}>
        <AddTaskBtn btnList openModal={openModal} mode={mode}/>
      </Box>
      {showModal && (
        <TaskModal
          currentTask={todos}
          date={date}
          category={category}
          closeModal={closeModal}
        />
      )}
    </Box>
  );
}

const style = {
  btnAdd: {
    width: {
      xs: 'calc(100% - 36px)',
      md: '100%',
    },
    position: {
      xs: 'absolute',
      md: 'static',
    },
    bottom: '10px',
    left: '18px',
    boxSizing: 'border-box',
    paddingInline: {
      md: '21px',
    },
  },
  addPanel: {
    paddingInline: '21px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '28px'
  },
  listTodos: {
    boxSizing: 'border-box',
    mt: '15px',
    maxWidth: {
      xs: 'calc(100%)',
      md: 'calc((100% - 16px) / 2)',
      lg: 'calc((100% - 54px) / 3)',
    },
    minWidth: {
      xs: 'calc(100%)',
      md: 'calc((100% - 16px) / 2)',
      lg: 'calc((100% - 54px) / 3)',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    scrollSnapAlign: 'center',
    alignItems: 'space-between',
    position: 'relative',
    padding: '18px 0 22px 0',
  },
  titleText: {
    color: ' #111',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: ' 24px',
  }
};
