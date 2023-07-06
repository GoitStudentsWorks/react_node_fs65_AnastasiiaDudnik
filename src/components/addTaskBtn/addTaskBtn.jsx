import { Button, IconButton, SvgIcon } from '@mui/material';
import React from 'react';
import Sprite from '../../icons/sprite.svg';

export default function AddTaskBtn({ btnList = false, openModal }) {
  if (btnList === true) {
    return (
      <Button onClick={openModal} sx={style.btnAdd}>
        {' '}
        + add task{' '}
      </Button>
    );
  }
  return (
    <IconButton onClick={openModal} aria-label="delete" sx={style.btn}>
      <SvgIcon sx={style.iconAdd} stroke="#111111">
        <use href={`${Sprite}#plus-circle`}></use>
      </SvgIcon>
    </IconButton>
  );
}

const style = {
  btn: {
    color: 'white',
  },
  iconAdd: {
    width: { xs: '22px', md: '24px' },
    height: { xs: '22px', md: '24px' },
  },
  btnAdd: {
    width: '100%',
    height: '48px',
    backgroundColor: '#E3F3FF',
    borderRadius: '8px',
    border: 'dashed #3E85F3 2px',
  },
};
