import React, { useState } from 'react';
import { Slide, Modal as MuiModal, Box } from '@mui/material';

import TaskForm from './TaskForm/TaskForm';

const TaskModal = ({
  onCloseModal,
  showEditBtn,
  id,
  editTask,
  addCategory,
  isOpened,
}) => {
  const [animationModal, setAnimationModal] = useState(isOpened);

  const handleClose = () => {
    setAnimationModal(false);
    setTimeout(() => {
      onCloseModal();
    }, 500);
  };

  return (
    <MuiModal
      open={isOpened}
      onClose={handleClose}
      aria-labelledby="task-modal-title"
      aria-describedby="task-modal-description"
      disableEnforceFocus
      BackdropProps={{
        style: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
      }}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Slide
        direction="up"
        in={animationModal}
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        <Box
          sx={{
            outline: 'none',
            backgroundColor: 'var(--primary-background-color)',
            borderRadius: '8px',
            boxShadow: '0px 8px 24px rgba(149, 157, 165, 0.2)',
          }}
        >
          <TaskForm
            onCloseModal={handleClose}
            showEditBtn={showEditBtn}
            id={id}
            editTask={editTask}
            addCategory={addCategory}
            setAnimationModal={setAnimationModal}
          />
        </Box>
      </Slide>
    </MuiModal>
  );
};

export default TaskModal;
