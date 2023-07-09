import { Box } from '@mui/material';
import ColumnsTasksList from 'components/columnsTasksList/columnsTasksList';
import DayCalendarHead from 'components/dayCalendarHead/dayCalendarHead';
import dayjs from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getWeekTasks } from 'redux/tasks/operations';

const ChoosedDay = ({ date }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [weekStartDate, setWeekStartDate] = useState(
    dayjs(location.pathname.slice(19, 29))
  );
  const [value, setValue] = useState(null);
  const [prevDate, setPrevDate] = useState('');
  const { day } = useParams();

  useEffect(() => {
    const newStartDate = dayjs(location.pathname.slice(19, 29));
    setWeekStartDate(newStartDate);
  }, [location.pathname]);

  useEffect(() => {
    setPrevDate(day);
  }, [day]);

  useEffect(() => {
    setPrevDate(location.pathname.slice(27, 29));
  }, [location.pathname]);

  const weekend = useMemo(() => {
    const arr = [];
    let i = 0;
    let y = 7;

    if (weekStartDate.weekday() === 0) {
      i = -7;
      y = 0;
    }

    for (let j = i; j < y; j++) {
      const test = weekStartDate.weekday(j + 1);

      arr.push({
        day: test.$D,
        weekDay: String(test.$d).slice(0, 3),
        weekDayMob: String(test.$d).slice(0, 1),
        date: test.$d,
      });
    }

    return arr;
  }, [weekStartDate]);

  const addZero = num => {
    return num < 10 ? `0${num}` : num;
  };

  useEffect(() => {
    if (value === null) {
      setValue(weekStartDate.day() === 0 ? 6 : weekStartDate.day() - 1);
    } else {
      const currentDate = location.pathname.slice(27, 29);

      if (currentDate > prevDate) {
        setValue(prevValue => {
          if (prevValue === 6) {
            setWeekStartDate(prevStartDate => prevStartDate.add(1, 'week'));
            return 0;
          }
          return prevValue + 1;
        });
      } else if (currentDate < prevDate) {
        setValue(prevValue => {
          if (prevValue === 0) {
            setWeekStartDate(prevStartDate =>
              prevStartDate.subtract(1, 'week')
            );
            return 6;
          }
          return prevValue - 1;
        });
      }

      setPrevDate(currentDate);
    }
  }, [date, location.pathname, prevDate, weekStartDate, value]);

  useEffect(() => {
    if (weekend[0]) {
      const { date } = weekend[0];
      const years = new Date(date).getFullYear();
      const month = addZero(new Date(date).getMonth() + 1);
      const day = addZero(new Date(date).getDate());

      dispatch(getWeekTasks({ years, month, day }));
    }
  }, [weekStartDate, dispatch, weekend]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  if (!weekStartDate || value === null || !weekend) {
    return null;
  }

  return (
    <Box sx={style.boxDay}>
      <Box sx={{ boxSizing: 'border-box', borderColor: 'divider' }}>
        <DayCalendarHead
          value={value}
          weekend={weekend}
          handleChange={handleChange}
        />
      </Box>
      <ColumnsTasksList weekend={weekend} value={value} />
    </Box>
  );
};

const style = {
  '&::-webkit--scrollbar': {
    borderRadius: '5px',
    width: '.65em',
    backgroundColor: '#ffffff',
  },
  '&::-webkit-scrollbar-track, &::-webkit-scrollbar-corner': {
    backgroundColor: 'rgba(170, 170, 170, 0)',
  },
  '&::-webkit-scrollbar-thumb, &::-webkit-resizer': {
    background: 'rgba(170, 170, 170, 0.6)',
    borderRadius: '5px',
    boxShadow:
      'inset 0.05em 0.05em 0 rgba(0, 0, 0, 0.1), inset 0 - 0.05em 0 rgba(0, 0, 0, 0.07)',
  },
  boxDay: {
    width: {
      xs: '100%',
      md: 'calc(100vw - 64px)',
      lg: 'calc(100%)',
    },
    margin: '0',
  },
};

export default ChoosedDay;
