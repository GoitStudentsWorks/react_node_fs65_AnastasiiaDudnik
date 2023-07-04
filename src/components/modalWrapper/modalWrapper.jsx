import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Box, IconButton, Modal, SvgIcon } from '@mui/material';
import Sprite from 'icons/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

const ModalWrapper = ({ children, closeModal, open }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === `Escape`) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  const handleClose = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Modal open onClose={closeModal} disablePortal>
      <Box
        sx={{
          position: 'absolute',
          boxShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
          borderRadius: '8px',
          maxWidth: '95%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <IconButton
          onClick={closeModal}
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

export default ModalWrapper;
