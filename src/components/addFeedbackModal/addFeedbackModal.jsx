import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Box, IconButton, Modal, SvgIcon } from '@mui/material';
import Sprite from 'icons/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export const FeedbackModalWrapper = ({ children, onClose, open, mode }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === `Escape`) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return createPortal(
    <Modal open={open} onClose={onClose} disablePortal>
      <Box
        sx={{
          position: 'absolute',
          boxShadow:
            mode !== 'dark'
              ? '0px 4px 57px 0px rgba(17, 17, 17, 0.05)'
              : '0px 4px 16px rgba(17, 17, 17, 0.1)',
          borderRadius: '8px',
          maxWidth: '95%',
          padding: ' 48px 18px 40px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: mode !== 'dark' ? '#171820' : '#FFFFFF',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            transition: 'all 250ms',
            cursor: 'pointner',
            width: { xs: '20px', md: '24px' },
            height: { xs: '20px', md: '24px' },
            padding: 0,
            color: mode !== 'dark' ? '#FFFFFF' : '#111111',
          }}
        >
          <SvgIcon stroke="currentColor">
            <use href={`${Sprite}#close`}></use>
          </SvgIcon>
        </IconButton>
        {children}
      </Box>
    </Modal>,
    modalRoot
  );
};
