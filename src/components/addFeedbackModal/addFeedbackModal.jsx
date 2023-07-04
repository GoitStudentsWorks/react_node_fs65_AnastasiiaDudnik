import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Box, IconButton, Modal, SvgIcon } from '@mui/material';
import Sprite from 'icons/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export const FeedbackModalWrapper = ({ children, onClose, open }) => {
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
          border: '1px solid rgba(220, 227, 229, 0.8)',
          boxShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
          borderRadius: '8px',
          maxWidth: '95%',
          padding: ' 48px 18px 40px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#FFFFFF',
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
