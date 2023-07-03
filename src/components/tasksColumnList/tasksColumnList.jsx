import { List, ListItem } from '@mui/material'
import TaskColumnCard from 'components/taskColumnCard/taskColumnCard'
import React from 'react'

export default function TasksColumnList() {
    return (
        <List sx={style.list}>
            <ListItem sx={style.item}>
                <TaskColumnCard />
            </ListItem>
            <ListItem sx={style.item}>
                <TaskColumnCard />
            </ListItem>
            <ListItem sx={style.item}>
                <TaskColumnCard />
            </ListItem>
            <ListItem sx={style.item}>
                <TaskColumnCard />
            </ListItem>
        </List>
    )
}

const style = {
    list: {
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




