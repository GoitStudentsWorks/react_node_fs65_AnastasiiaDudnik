

import { Box } from '@mui/material'
import TasksColumn from 'components/tasksColumnList copy/tasksColumn'
import React from 'react'

export default function ColumnsTasksList() {
  return (
    <Box sx={style.taskPanel}>
      <TasksColumn />
      <TasksColumn />
      <TasksColumn />
    </Box>
  )
}

const style = {
  
  taskPanel: {
    scrollbarColor: 'black',
    display: 'flex  ',
    overflowX: {
      xs: 'scroll',
      mb: 'scroll',
      lg: 'auto',
    },
    scrollSnapType: 'x mandatory',
    width: {
      xs: 'calc(100vw - 40px)',
      md: 'calc(100vw - 64px)',
      lg: 'calc(100%)',
    },
    gap: {
      xs: '20px',
      md: '16px',
      lg: '27px'
    },
    boxSizing: 'border-box',

    paddingBottom: '46px',
  }
}