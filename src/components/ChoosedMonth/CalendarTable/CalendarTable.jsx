import React, { useEffect } from 'react';
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameDay } from 'date-fns';
import { nanoid } from 'nanoid';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { parseDate } from 'helpers/parseDate';
import MonthTaskList from '../MonthTaskList/MonthTaskList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTasks } from 'redux/tasks/operations';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

const CalendarTable = ({ currentDate, setCurrentDate, setSelectedDay }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd);
  const dateFormat = 'd';
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn === false || isRefreshing === true) {
      return;
    }

    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const reqObj = {
      month,
      year,
      page: 1,
      limit: 100,
    };
    dispatch(fetchAllTasks(reqObj));
  }, [currentDate, dispatch, isLoggedIn, isRefreshing]);

  const onDateClick = (date) => {
    setCurrentDate(date);
    setSelectedDay(date);
  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const initDate = day;
      formattedDate = format(day, dateFormat);
      days.push(
        <Box
          className={`column cell ${
            day.getMonth() !== monthStart.getMonth()
              ? 'disabled'
              : isSameDay(day, currentDate)
              ? 'selected'
              : ''
          }`}
          key={nanoid()}
          onClick={() => {
            onDateClick(initDate);
            navigate(`day/${parseDate(initDate)}`);
          }}
          sx={{
            flexGrow: 1,
            flexBasis: 0,
            maxWidth: '100%',
            position: 'relative',
            height: '7em',
            paddingTop: '25px',
            border: 'var(--border)',
            overflow: 'hidden',
            background: 'var(--primary-background-color)',
            fontWeight: 700,
            fontSize: '12px',
            lineHeight: 1.17,
            textTransform: 'uppercase',
            transition: '0.1s ease-out',
            color: 'var(--calendar-digit-color)',
            pointerEvents: 'pointer',
            '&.disabled': {
              color: 'transparent',
              pointerEvents: 'none',
            },
            '&.selected > .number': {
              color: 'white',
              backgroundColor: 'var(--color-button-period-type)',
            },
            '@media screen and (min-width: 768px)': {
              fontSize: '16px',
              lineHeight: 1.12,
              paddingTop: '33px',
            },
            '@media screen and (min-width: 1100px)': {
              padding: '33px 3px 0px',
            },
          }}
        >
          <Typography variant="body1" className="number">
            {formattedDate}
          </Typography>
          <MonthTaskList date={initDate} />
        </Box>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <Box key={nanoid()} sx={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
        {days}
      </Box>
    );
    days = [];
  }

  return (
    <Box sx={{ border: '0.5px solid rgba(220, 227, 229, 0.5)', borderRadius: '8px', overflow: 'hidden' }}>
      {rows}
    </Box>
  );
};

export default CalendarTable;
