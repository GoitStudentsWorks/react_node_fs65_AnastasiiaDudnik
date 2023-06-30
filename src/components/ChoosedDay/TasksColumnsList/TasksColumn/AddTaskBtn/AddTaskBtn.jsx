import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TaskModal from '../TaskModal/TaskModal';
import Icons from 'icons/sprite.svg';

const AddTaskBtn = ({ addCategory }) => {
  const { i18n } = useTranslation();
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleModal = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          width: '90%',
          height: 48,
          cursor: 'pointer',
          fontSize: 14,
          lineHeight: '18px',
          borderRadius: 8,
          ':hover': {
            backgroundColor: 'var(--hover-btn-background-color)',
          },
        }}
        onClick={handleToggleModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          style={{ marginRight: 8, stroke: 'var(--primary-text-color)' }}
        >
          <use href={`${Icons}#add-btn-s`}></use>
        </svg>
        {i18n.language === 'en' ? 'Add task' : 'Додати завдання'}
      </Button>
      {isOpened && (
        <TaskModal
          onCloseModal={handleToggleModal}
          addCategory={addCategory}
          isOpened={isOpened}
        />
      )}
    </>
  );
};

export default AddTaskBtn;