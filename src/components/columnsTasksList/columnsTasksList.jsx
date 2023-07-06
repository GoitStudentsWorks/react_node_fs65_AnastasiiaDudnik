import { Box } from '@mui/material'
import TasksColumn from 'components/tasksColumnList copy/tasksColumn'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectTasks } from 'redux/tasks/selectors'

export default function ColumnsTasksList({ value, weekend }) {
  const { tasks } = useSelector(selectTasks);
  const day = new Date(weekend[value].date).getDate();
  const dateTask = new Date(weekend[value].date)
  if (!tasks) {
    return
  }

  const dayTasks = tasks.filter(({ date }) => new Date(date).getDate() === day)

  return (
    <Box sx={style.taskPanel}>
      <TasksColumn title={'To do'} category={'to-do'} date={dateTask} todos={dayTasks.filter(({ category }) => category === "to-do")} />
      <TasksColumn title={'In progress'} category={'in-progress'} date={dateTask} todos={dayTasks.filter(({ category }) => category === "in-progress")} />
      <TasksColumn title={'Done'} category={'done'} date={dateTask} todos={dayTasks.filter(({ category }) => category === "done")} />
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

    maxHeight: {
      md: '100%',
      lg: '100%'
    },
  }
}