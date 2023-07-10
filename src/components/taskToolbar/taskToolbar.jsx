import { Box, IconButton, List, ListItem, SvgIcon } from '@mui/material';
import React, { useState } from 'react';
import Sprite from '../../icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from 'redux/tasks/operations';
import TaskModal from 'components/taskModal/taskModal';

function MiniModal({ todo, mode }) {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        ...style.miniModal,
        backgroundColor: mode === 'light' ? '#171820' : '#FFFFFF',
        boxShadow:
          mode === 'light'
            ? '0px 4px 16px 0px rgba(17, 17, 17, 0.10)'
            : '0px 4px 16px 0px rgba(17, 17, 17, 0.10)',
        border:
          mode === 'light' ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
      }}
      id={'modal'}
    >
      <Box
        sx={{
          ...style.btnMiniModal,
          display: todo.category === 'to-do' ? 'none' : 'flex',
          color: mode === 'light' ? 'white' : 'black',
        }}
        onClick={() => dispatch(updateTask({ ...todo, category: 'to-do' }))}
      >
        To do
        <SvgIcon
          sx={style.iconButton}
          stroke={mode === 'light' ? '#FFFFFF' : '#111111'}
        >
          <use href={`${Sprite}#arrow-circle`}></use>
        </SvgIcon>
      </Box>
      <Box
        sx={{
          ...style.btnMiniModal,
          display: todo.category === 'in-progress' ? 'none' : 'flex',
          color: mode === 'light' ? 'white' : 'black',
        }}
        onClick={() =>
          dispatch(updateTask({ ...todo, category: 'in-progress' }))
        }
      >
        In progress
        <SvgIcon
          sx={style.iconButton}
          stroke={mode === 'light' ? '#FFFFFF' : '#111111'}
        >
          <use href={`${Sprite}#arrow-circle`}></use>
        </SvgIcon>
      </Box>
      <Box
        sx={{
          ...style.btnMiniModal,
          display: todo.category === 'done' ? 'none' : 'flex',
          color: mode === 'light' ? 'white' : 'black',
        }}
        onClick={() => dispatch(updateTask({ ...todo, category: 'done' }))}
      >
        Done
        <SvgIcon
          sx={style.iconButton}
          stroke={mode === 'light' ? '#FFFFFF' : '#111111'}
        >
          <use href={`${Sprite}#arrow-circle`}></use>
        </SvgIcon>
      </Box>
    </Box>
  );
}

export default function TaskToolbar({ todo, mode }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
    setEditingTask(true);
  };

  return (
    <List sx={style.taskMenu}>
      <ListItem
        sx={{ padding: '0', position: { xs: 'static', md: 'relative' } }}
      >
        <IconButton
          aria-label="drag"
          sx={style.btnMenu}
          onClick={() => setIsOpen(isOpen => !isOpen)}
        >
          <SvgIcon
            sx={{
              ...style.iconButton,
              stroke:
                isOpen === true
                  ? '#3E85F3'
                  : mode === 'light'
                  ? '#FFFFFF'
                  : '#111111',
            }}
          >
            <use href={`${Sprite}#arrow-circle`}></use>
          </SvgIcon>
        </IconButton>
        {isOpen && <MiniModal todo={todo} mode={mode} />}
      </ListItem>

      <ListItem sx={{ padding: '0' }}>
        <IconButton aria-label="edit" sx={style.btnMenu} onClick={openModal}>
          <SvgIcon
            sx={style.iconButton}
            stroke={mode === 'light' ? '#FFFFFF' : '#111111'}
          >
            <use href={`${Sprite}#pencil`}></use>
          </SvgIcon>
        </IconButton>
        {showModal && (
          <TaskModal
            currentTask={todo}
            closeModal={closeModal}
            editingTask={editingTask}
            mode={mode}
          />
        )}
      </ListItem>

      <ListItem sx={{ padding: '0' }}>
        <IconButton
          aria-label="delete"
          sx={style.btnMenu}
          onClick={() => dispatch(deleteTask(todo._id))}
        >
          <SvgIcon
            sx={style.iconButton}
            stroke={mode === 'light' ? '#FFFFFF' : '#111111'}
          >
            <use href={`${Sprite}#trash`}></use>
          </SvgIcon>
        </IconButton>
      </ListItem>
    </List>
  );
}

const style = {
  taskMenu: {
    maxWidth: 360,
    display: 'flex',
    padding: '0',
    gap: '10px',
  },
  btnMenu: {
    padding: '0',
    '&:hover, &:focus': {
      '& svg': {
        stroke: '#3E85F3',
      },
    },
  },
  iconButton: {
    width: { xs: '14px', md: '16px' },
    height: { xs: '14px', md: '16px' },
    color: 'transparent',
  },
  miniModal: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    position: 'absolute',
    left: {
      xs: '-38px',
      md: '-64px',
    },
    bottom: '-10px',
    padding: {
      xs: '14px',
      md: '20px 24px',
    },
    boxSizing: 'border-box',
    width: {
      xs: '115px',
      md: '148px',
    },
    height: {
      xs: '70px',
      md: '90px',
    },
    bgcolor: '#FFFFFF',
    borderRadius: '8px',
    transform: 'translateY(100%)',
    zIndex: '1000',
  },
  btnMiniModal: {
    height: {
      xs: '14px',
      md: '18px',
    },
    color: '#343434',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '18px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:hover, &:focus': {
      color: ' #3E85F3',
      '& svg': {
        stroke: '#3E85F3',
      },
      cursor: 'pointer',
    },
  },
};
