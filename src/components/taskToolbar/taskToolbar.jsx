import { Box, IconButton, List, ListItem, SvgIcon } from '@mui/material'
import React, { useState } from 'react'
import Sprite from '../../icons/sprite.svg'
import { useDispatch } from 'react-redux'
import { deleteTask, updateTask } from 'redux/tasks/operations';

function MiniModal({ todo }) {
    const dispatch = useDispatch();

    return (

        <Box sx={style.miniModal} id={'modal'}>
            <Box sx={{ ...style.btnMiniModal, display: todo.category === 'to-do' ? 'none' : 'flex' }}
                onClick={() => dispatch(updateTask({ ...todo, category: 'to-do' }))} >
                To do
                <SvgIcon sx={style.iconButton} stroke="#111111" >
                    <use href={`${Sprite}#arrow-circle`}></use>
                </SvgIcon>
            </Box>
            <Box sx={{ ...style.btnMiniModal, display: todo.category === 'in-progress' ? 'none' : 'flex' }}
                onClick={() => dispatch(updateTask({ ...todo, category: 'in-progress' }))}>
                In progress
                <SvgIcon sx={style.iconButton} stroke="#111111" >
                    <use href={`${Sprite}#arrow-circle`}></use>
                </SvgIcon>
            </Box>
            <Box sx={{ ...style.btnMiniModal, display: todo.category === 'done' ? 'none' : 'flex' }}
                onClick={() => dispatch(updateTask({ ...todo, category: 'done' }))}>
                Done
                <SvgIcon sx={style.iconButton} stroke="#111111" >
                    <use href={`${Sprite}#arrow-circle`}></use>
                </SvgIcon>
            </Box>
        </Box>)
}

export default function TaskToolbar({ todo }) {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false)

    return (
        <List sx={style.taskMenu} >

            <ListItem sx={{ padding: '0', position: { xs: 'static', md: 'relative' } }}>
                <IconButton aria-label="drag" sx={style.btnMenu} onClick={() => setIsOpen(isOpen => !isOpen)}>
                    <SvgIcon sx={{ ...style.iconButton, stroke: isOpen === true ? '#3E85F3' : '#111111' }}   >
                        <use href={`${Sprite}#arrow-circle`}></use>
                    </SvgIcon>
                </IconButton>
                {isOpen && <MiniModal todo={todo} />}

            </ListItem>

            <ListItem sx={{ padding: '0' }}>
                <IconButton aria-label="edit" sx={style.btnMenu}>
                    <SvgIcon sx={style.iconButton} stroke="#111111" >
                        <use href={`${Sprite}#pencil`}></use>
                    </SvgIcon>
                </IconButton>
            </ListItem>

            <ListItem sx={{ padding: '0' }}>
                <IconButton aria-label="delete" sx={style.btnMenu} onClick={() => dispatch(deleteTask(todo._id))}>
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
        '&:hover, &:focus': {
            '& svg': {
                stroke: '#3E85F3'
            },
        }
    },
    iconButton: {
        width: { xs: '14px', md: '16px' },
        height: { xs: '14px', md: '16px' },
        color: 'transparent'
    },
    miniModal: {
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        position: 'absolute',
        right: {
            xs: '-66px',
            md: '-66px',
        },
        bottom: '-10px',
        padding: '20px 24px',
        boxSizing: 'border-box',
        width: '148px',
        height: '90px',
        bgcolor: '#FFFFFF',
        borderRadius: '8px',
        transform: 'translateY(100%)',
        zIndex: '1000',
        boxShadow: '0px 4px 16px 0px rgba(17, 17, 17, 0.10)'

    },
    btnMiniModal: {
        height: '18px',
        color: '#343434',
        fontSize: '14px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '18px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:hover, &:focus': {
            color: ' #3E85F3',
            '& svg': {
                stroke: '#3E85F3'
            },
            cursor: 'pointer',
        }
    }
}