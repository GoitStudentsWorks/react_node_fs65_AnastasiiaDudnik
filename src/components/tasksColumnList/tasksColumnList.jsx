import { List, ListItem } from '@mui/material'
import TaskColumnCard from 'components/taskColumnCard/taskColumnCard'
import React from 'react'

export default function TasksColumnList({ todos }) {

    return (
        <List sx={style.list}>
            {todos.map(todo =>
                <ListItem key={todo._id} sx={style.item}>
                    <TaskColumnCard todo={todo} />
                </ListItem>
            )}
        </List>
    )
}

const style = {
    list: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        marginTop: '24px',
        overflowY: 'auto',
        height: '400px',
        padding: '0',
        paddingInline: '21px',
    },
    item: {
        "&:last-child": {
            marginBottom: {
                xs: '46px',
                md: '0'
            }
        },
        padding: '0'
    },
}




