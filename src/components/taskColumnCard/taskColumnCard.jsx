import { Avatar, Box, Typography } from '@mui/material'
import TaskToolbar from 'components/taskToolbar/taskToolbar'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';


export default function TaskColumnCard({ todo, mode }) {
    const userState = useSelector(selectUser);
    console.log(userState)

    return (
        <Box sx={{ ...style.taskBox, bgcolor: mode === 'light' ? '#171820' : '#F7F6F9' }}>
            <Typography sx={{ ...style.text, color: mode === 'light' ? '#FFF' : '#111111' }}>{todo.title}</Typography>
            <Box sx={style.flexBox}>
                <Box sx={style.avatarBox}>
                    <Avatar
                        src={userState.avatarURL || ''}
                        sx={style.avatar}
                    />

                    <Box sx={{
                        ...style.priorityLabel, backgroundColor:
                            todo.priority === 'low' ? "#72C2F8" : todo.priority === 'medium' ? '#F3B249' : '#EA3D65'
                    }}>{todo.priority}</Box>
                </Box>
                <TaskToolbar todo={todo} mode={mode} />
            </Box>
        </Box>
    )
}

const style = {
    flexBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    text: {
        textOverflow: 'ellipsis',
        width: '100%',
        whiteSpace: 'nowrap',
        marginBottom: '28px',
        overflow: 'hidden',
        color: '#FFF',
        whitespace: 'nowrap',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '18px',
    },
    taskBox: {
        padding: '15px',
        boxSizing: 'border-box',
        bgcolor: '#F7F6F9',
        minWidth: '100%',
        maxWidth: '100%',
        borderRadius: '8px',
        position: 'relative',


    },
    avatarBox: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    avatar: {
        border: '1.8px solid #3E85F3',
        width: { xs: '32px', md: '44px' },
        height: { xs: '32px', md: '44px' },
    },
    priorityLabel: {
        paddingInline: '15px',
        height: '20px',
        borderRadius: '4px',
        lineHeight: '1.2',
        fontSize: '10px',
        color: '#F7F6F9',
        display: 'flex',
        alignItems: 'center',
    },

}