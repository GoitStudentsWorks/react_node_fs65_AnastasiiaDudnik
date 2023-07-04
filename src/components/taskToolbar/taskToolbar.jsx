import { IconButton, List, ListItem, SvgIcon } from '@mui/material'
import React from 'react'
import Sprite from '../../icons/sprite.svg'
import { useDispatch } from 'react-redux'
import { deleteTask } from 'redux/tasks/operations';

export default function TaskToolbar({ id }) {
    const dispatch = useDispatch();


    return (
        <List sx={style.taskMenu} >

            <ListItem sx={{ padding: '0' }}>
                <IconButton aria-label="drag" sx={style.btnMenu}>
                    <SvgIcon sx={style.iconButton} stroke="#111111" >
                        <use href={`${Sprite}#arrow-circle`}></use>
                    </SvgIcon>
                </IconButton>
            </ListItem>

            <ListItem sx={{ padding: '0' }}>
                <IconButton aria-label="edit" sx={style.btnMenu}>
                    <SvgIcon sx={style.iconButton} stroke="#111111" >
                        <use href={`${Sprite}#pencil`}></use>
                    </SvgIcon>
                </IconButton>
            </ListItem>

            <ListItem sx={{ padding: '0' }}>
                <IconButton aria-label="delete" sx={style.btnMenu} onClick={() => dispatch(deleteTask(id))}>
                    <SvgIcon sx={style.iconButton} stroke="#111111" >
                        <use href={`${Sprite}#trash`}></use>
                    </SvgIcon>
                </IconButton>
            </ListItem>

        </List>
    )
}

const style = {
    taskMenu: {
        maxWidth: 360,
        display: 'flex',
        padding: '0',
        gap: '10px'
    },
    btnMenu: {
        padding: '0',
        color: 'transparent'
    },
    iconButton: {
        width: { xs: '14px', md: '16px' },
        height: { xs: '14px', md: '16px' },
    },
}