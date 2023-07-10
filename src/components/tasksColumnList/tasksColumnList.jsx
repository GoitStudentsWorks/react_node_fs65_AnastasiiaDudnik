import { List, ListItem } from '@mui/material'
import TaskColumnCard from 'components/taskColumnCard/taskColumnCard'
import React from 'react'

export default function TasksColumnList({ todos, mode }) {

    const listSetts = {
        marginBottom: '',
    }
    if (todos.length === 0) { listSetts.marginBottom = '0px' }
    else { listSetts.marginBottom = '32px'}


    return (
        <List sx={{ ...style.list, ...listSetts}}>
            {todos.map(todo =>
                <ListItem key={todo._id} sx={style.item}>
                    <TaskColumnCard todo={todo} mode={mode}/>
                </ListItem>
            )}
        </List>
    )
}

const style = {
    list: {
        boxSizing: 'border-box',

        display: 'flex',
        width: '100%',
        maxHeight: '400px',
        flexDirection: 'column',
        alignItems: 'flex-start',

        gap: '18px',

        padding: '0',
        paddingInline: '21px',
        overflowY: 'auto', 
    },
    item: {
        padding: '0',
        '&:last-child': {
            marginBottom: {xs: '28px', md: 0}
        },
        '&:last-child #modal': {
            top: 0,
            transform: 'translateY(-110%)'
        },
    },
}




