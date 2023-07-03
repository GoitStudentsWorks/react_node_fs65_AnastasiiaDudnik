import { Avatar, Box, Typography } from '@mui/material'
import TaskToolbar from 'components/taskToolbar/taskToolbar'
import React from 'react'


export default function TaskColumnCard() {
    return (
        <Box sx={style.taskBox}>
            <Typography sx={style.text}>Title: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, laboriosam!   </Typography>
            <Box sx={style.flexBox}>
                <Box sx={style.avatarBox}>
                    <Avatar sx={style.avatar} />
                    <Box sx={style.priorityLabel}>Medium</Box>
                </Box>
                <TaskToolbar />
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
        overflow: 'hidden',
        width: '100%',
        whiteSpace: 'nowrap',
        marginBottom: '28px'
    },
    taskBox: {
        padding: '15px',
        boxSizing: 'border-box',
        bgcolor: '#F7F6F9',
        width: '100%',
        borderRadius: '8px'
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
        bgcolor: '#F3B249',
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