import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TaskModal from '../TaskModal/TaskModal';
import Icons from 'icons/sprite.svg';

const ColumnHeadBar = ({ headName, addCategory }) => {
  const { i18n } = useTranslation();
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleModal = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <div
        style={{
          width: '90%',
          height: 34,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 'auto',
          marginBottom: 24,
        }}
      >
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: 20,
            color: 'var(--primary-text-color)',
          }}
        >
          {headName}
        </p>
        <Button
          variant="outlined"
          sx={{
            width: 20,
            height: 20,
            border: '2px solid var(--close-btn-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--primary-background-color)',
            borderRadius: '50%',
            padding: 0,
            cursor: 'pointer',
            ':hover': {
              borderColor: 'var(--close-btn-color)',
            },
          }}
          onClick={handleToggleModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            style={{ stroke: 'var(--close-btn-color)' }}
          >
            <use href={`${Icons}#profile-plus-s`}></use>
          </svg>
        </Button>
      </div>
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

export default ColumnHeadBar;
