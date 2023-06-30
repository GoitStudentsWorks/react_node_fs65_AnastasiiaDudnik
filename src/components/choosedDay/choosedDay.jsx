import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDayTasks } from 'redux/tasks/operations';
import { selectTasks } from 'redux/tasks/selectors';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';

const ChoosedDay = ({ selectedDay, setSelectedDay }) => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn === false || isRefreshing === true) {
      return;
    }

    const date = new Date(selectedDay);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const reqObj = {
      month,
      day,
      year,
      page: 1,
      limit: 100,
    };

    dispatch(fetchDayTasks(reqObj));
  }, [selectedDay, dispatch, isLoggedIn, isRefreshing]);

  const tasks = useSelector(selectTasks);

  const readinessTasks = {
    todotasks: tasks.filter((item) => item.category === 'to-do'),
    inprogresstasks: tasks.filter((item) => item.category === 'in-progress'),
    donetasks: tasks.filter((item) => item.category === 'done'),
  };

  return (
    <Box
      sx={{
        backgroundColor: 'var(--secondary-background-color)',
        margin: 0,
      }}
    >
      <DayCalendarHead
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <TasksColumnsList readinessTasks={readinessTasks} />
    </Box>
  );
};

export default ChoosedDay;
