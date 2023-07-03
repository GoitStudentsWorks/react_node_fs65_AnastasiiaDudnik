import { Box, Typography } from '@mui/material'
import AddTaskBtn from 'components/addTaskBtn/addTaskBtn'
import TasksColumnList from 'components/tasksColumnList/tasksColumnList'
import React from 'react'

export default function TasksColumn() {
  return (
    <Box sx={style.listTodos}>
      <Box sx={style.addPanel}>
        <Typography> To do</Typography>
        <AddTaskBtn />
      </Box>

      <TasksColumnList />

      <Box sx={style.btnAdd}>
        <AddTaskBtn btnList />
      </Box>
    </Box>
  )
}

const style = {
  btnAdd: {
    width: {
      xs: 'calc(100% - 36px)',
      md: '100%',
    },
    position: {
      xs: 'absolute',
      md: 'static',
    },
    bottom: '10px',
    left: '18px',
    boxSizing: 'border-box',
    paddingInline: {
      md: '21px'
    },
    marginTop: {
      md: '32px'
    }
  },
  addPanel: {
    paddingInline: '21px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listTodos: {
    boxSizing: 'border-box',
    mt: '15px',
    maxWidth: {
      xs: 'calc(100%)',
      md: 'calc((100% - 16px) / 2)',
      lg: 'calc((100% - 54px) / 3)',
    },
    minWidth: {
      xs: 'calc(100%)',
      md: 'calc((100% - 16px) / 2)',
      lg: 'calc((100% - 54px) / 3)',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    scrollSnapAlign: 'center',
    alignItems: 'space-between',
    position: 'relative',
    padding: '18px 0 22px 0'
  },

}