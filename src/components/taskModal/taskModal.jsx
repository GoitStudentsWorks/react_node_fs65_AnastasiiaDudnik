import { Box } from '@mui/material';
import ModalWrapper from 'components/taskModal/modal/modal';
import TaskForm from 'components/taskForm/taskForm';
import { colorsLight } from 'components/variables/colors';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TaskModal = ({ closeModal, currentTask }) => {
  const [data, setData] = useState(null);
  const { currentDay } = useParams();

  // useEffect(() => {
  //   const { _id, category } = currentTask;

  //   if (_id) {
  //     setData({ ...data, status: 'edit' });
  //   } else if (category) {
  //     setData({
  //       title: '',
  //       date: currentDay,
  //       start: '00:00',
  //       end: '00:00',
  //       priority: 'Low',
  //       category,
  //       statusOperation: 'create',
  //     });
  //   } else {
  //     closeModal();
  //   }
  // }, [closeModal, currentTask, currentDay]);

  return (
    <ModalWrapper closeModal={closeModal}>
      <Box
        sx={{
          borderRadius: '8px',
          border: '1px solid rgba(220, 227, 229, 0.8)',
          boxShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
          backgroundColor: colorsLight.mainBackgroundColor,
          width: { xs: '100%', md: '396px', lg: '396px' },
          height: { xs: '100%', md: '360px', lg: '360px' },
          padding: 0,
        }}
      >
        <TaskForm currentTask={currentTask} closeModal={closeModal} />
      </Box>
    </ModalWrapper>
  );
};

export default TaskModal;
