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
    // '@global': {
    //     '*::-webkit-scrollbar': {
    //       width: '0.4em'
    //     },
    //     '*::-webkit-scrollbar-track': {
    //       '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    //     },
    //     '*::-webkit-scrollbar-thumb': {
    //       backgroundColor: 'rgba(0,0,0,.1)',
    //       outline: '1px solid slategrey'
    //     }
    //   },
    // '*::-webkit-scrollbar': {
    //     borderRadius: '5px',
    //     width: '.65em',
    //     backgroundColor: '#ffffff',
    // },
    // '&::-webkit-scrollbar': {
    //     borderRadius: '5px',
    //     width: '.65em',
    //     backgroundColor: '#ffffff',
    // },
    // '*::-webkit-scrollbar-track, *::-webkit-scrollbar-corner': {
    //     backgroundColor: 'rgba(170, 170, 170, 0)',
    // },
    // '&::-webkit-scrollbar-track, *::-webkit-scrollbar-corner': {
    //     backgroundColor: 'rgba(170, 170, 170, 0)',
    // },
    // '*::-webkit-scrollbar-thumb, &::-webkit-resizer': {
    //     background: 'rgba(170, 170, 170, 0.6)',
    //     borderRadius: '5px',
    //     boxShadow: 'inset 0.05em 0.05em 0 rgba(0, 0, 0, 0.1), inset 0 - 0.05em 0 rgba(0, 0, 0, 0.07)',
    // },
    list: {
        boxSizing: 'border-box',

        display: 'flex',
        width: '100%',
        maxHeight: '400px',
        flexDirection: 'column',
        alignItems: 'flex-start',

        gap: '18px',
        marginTop: '24px',
        padding: '0',
        paddingInline: '21px',
        overflowY: 'auto'
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




