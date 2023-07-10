import { Box } from '@mui/material';
import ModalWrapper from 'components/taskModal/modal/modal';
import TaskForm from 'components/taskForm/taskForm';
import { colorsDark, colorsLight } from 'components/variables/colors';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TaskModal = ({
  closeModal,
  currentTask,
  date,
  category,
  editingTask,
  mode,
}) => {
  const [data, setData] = useState(null);
  const { currentDay } = useParams();

  useEffect(() => {
    const { _id } = currentTask;
    if (_id) {
      setData({ ...currentTask, status: 'edit' });
    } else if (category) {
      setData({
        title: '',
        date: currentDay,
        start: '00:00',
        end: '00:00',
        priority: 'low',
        category,
        statusOperation: 'create',
      });
    } else {
      closeModal();
    }
  }, [closeModal, currentTask, currentDay, category]);

  return (
    <ModalWrapper closeModal={closeModal} mode={mode}>
      <Box
        sx={{
          borderRadius: '8px',
          border: mode === 'dark' && '1px solid rgba(220, 227, 229, 0.8)',
          boxShadow:
            mode !== 'dark'
              ? '0px 4px 57px 0px rgba(17, 17, 17, 0.05)'
              : '0px 4px 16px rgba(17, 17, 17, 0.1)',
          backgroundColor:
            mode !== 'dark'
              ? colorsDark.popUpBackGroundColor
              : colorsLight.mainBackgroundColor,
          width: { xs: '100%', md: '396px', lg: '396px' },
          height: { xs: '100%', md: '360px', lg: '360px' },
          padding: 0,
        }}
      >
        <TaskForm
          date={date}
          category={category ? category : 'to-do'}
          currentTask={data}
          closeModal={closeModal}
          editingTask={editingTask}
          mode={mode}
        />
      </Box>
    </ModalWrapper>
  );
};

export default TaskModal;
