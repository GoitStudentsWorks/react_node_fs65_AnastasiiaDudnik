import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Box, IconButton, Modal } from '@mui/material';
import Icons from 'icons/Icons';

const modalRoot = document.querySelector('#modal-root');

const ModalWrapper = ({ children, onClose, open }) => {
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

  // const handleClose = e => {
  //   if (e.target === e.currentTarget) {
  //     onClose();
  //   }
  // };

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
            padding: 0,
            position: 'absolute',
            top: '19px',
            right: '19px',
            transition: 'all 250ms',
          }}
        >
          <Icons
            name="close"
            size="24px"
            color="#111111"
            // sx={{
            //   position: 'absolute',
            //   top: '19px',
            //   right: '19px',
            //   transition: 'all 250ms',
            //   cursor: 'pointner',
            // }}
          />
        </IconButton>
        {children}
      </Box>
    </Modal>,
    modalRoot
  );
};

export default ModalWrapper;
