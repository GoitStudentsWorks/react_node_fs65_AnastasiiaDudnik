import { Button, IconButton, SvgIcon } from '@mui/material';
import React from 'react';
import Sprite from '../../icons/sprite.svg';

export default function AddTaskBtn({ btnList = false, openModal, mode }) {
  if (btnList === true) {
    return (
      <Button onClick={openModal} sx={{
        ...style.btnAdd,
        backgroundColor: mode === 'light' ? '#3E85F3' : '#E3F3FF',
        color: mode === 'light' ? '#FFF' : '#111',
      }}>
        {' '}
        <SvgIcon sx={style.iconAdd} stroke={mode === 'light' ? '#FFFFFF' : "#111111"}>
          <use href={`${Sprite}#add`}></use>
        </SvgIcon>
        <p>Add task</p>{' '}
      </Button>
    );
  }
  return (
    <IconButton onClick={openModal} aria-label="delete" sx={{ color: mode === 'light' ? '#21222C' : '#FFFFFF' }}>
      <SvgIcon sx={style.iconAdd} stroke={mode === 'light' ? '#FFFFFF' : "#111111"}>
        <use href={`${Sprite}#plus-circle`}></use>
      </SvgIcon>
    </IconButton>
  );
}

const style = {
  iconAdd: {
    width: { xs: '22px', md: '24px' },
    height: { xs: '22px', md: '24px' },
  },
  btnAdd: {
    width: '100%',
    height: '48px',
    borderRadius: '8px',
    border: 'dashed #3E85F3 2px',
    textTransform: 'none',
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '18px',
    display: 'flex',
    gap: '8px'
  },
};
