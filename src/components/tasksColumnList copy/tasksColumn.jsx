import { Box, Typography } from '@mui/material';
import AddTaskBtn from 'components/addTaskBtn/addTaskBtn';
import { useState } from 'react';
import TasksColumnList from 'components/tasksColumnList/tasksColumnList';
import React from 'react';
import TaskModal from 'components/taskModal/taskModal';

export default function TasksColumn({ title, todos, date, category }) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <Box sx={style.listTodos}>
      <Box sx={style.addPanel}>
        <Typography>{title}</Typography>
        <AddTaskBtn openModal={openModal} />
      </Box>

      <TasksColumnList todos={todos} />

      <Box sx={style.btnAdd}>
        <AddTaskBtn btnList openModal={openModal} />
      </Box>
      {showModal && <TaskModal currentTask={todos} date={date} category={category} closeModal={closeModal} />}
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
    marginTop: {
      md: '32px',
    },
  },
  addPanel: {
    paddingInline: '21px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
};
