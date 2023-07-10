import { Box } from '@mui/material';
import ColumnsTasksList from 'components/columnsTasksList/columnsTasksList';
import DayCalendarHead from 'components/dayCalendarHead/dayCalendarHead';
import dayjs from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getWeekTasks } from 'redux/tasks/operations';

export default function ChoosedDay({mode}) {
  const params = useParams()
  const [day, setDay] = useState(() => params.day);
  const [value, setValue] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [weekYear, setWeekYear] = useState(null);

  useEffect(() => {
    if (day !== params.day) {
      setDay(params.day)
    }

  }, [day, params.day])

  const weekend = useMemo(() => {
    const arr = [];
    let i = 0;
    let y = 7;

    if (dayjs(day).weekday() === 0) {
      i = -7;
      y = 0;
    }
    let e = 0;
    for (i; i < y; i++) {
      const test = dayjs(day).weekday(i + 1);

      arr[e] = {
        day: test.$D,
        weekDay: String(test.$d).slice(0, 3),
        weekDayMob: String(test.$d).slice(0, 1),
        date: test.$d,
        dayFormat: dayjs(test.$d).format('YYYY-MM-DD')
      };
      e++;
    }
    return arr;
  }, [day]);

  function addZero(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  }

  useEffect(() => {
    if (weekend) {
      const index = weekend.findIndex(({ dayFormat }) =>
        dayFormat === day
      );

      setValue(index)
    }
  }, [day, weekend])

  useEffect(() => {
    if (value === null) {
      setValue(dayjs(day).day() === 0 ? 6 : dayjs(day).day() - 1);
    }
  }, [day, value]);

  useEffect(() => {
    const currentWeek = dayjs(weekend[0].dayFormat).week(); 

    if (weekend[0] && currentWeek !== weekYear) {
      dispatch(
        getWeekTasks({
          years: new Date(weekend[0].date).getFullYear(),
          month: addZero(new Date(weekend[0].date).getMonth() + 1),
          day: addZero(new Date(weekend[0].date).getDate()),
        })
      );
      setWeekYear(currentWeek)
    }
  }, [dispatch, weekYear, weekend]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    navigate(`/main/calendar/day/${weekend[newValue].dayFormat}`)
  };


  if (!day) { return }
  if (value === null || !weekend) { return }

  return (
    <Box sx={style.boxDay}>
      <Box sx={{ boxSizing: 'border-box' }}>
        <Box sx={{ borderColor: 'divider' }}>
          <DayCalendarHead
            value={value}
            weekend={weekend}
            mode={mode}
            handleChange={handleChange}
          />
        </Box>
      </Box>
      <ColumnsTasksList weekend={weekend} mode={mode} value={value} />
    </Box>
  );
}

const style = {
  boxDay: {
    width: {
      xs: '100%',
      md: 'calc(100vw - 64px)',
      lg: 'calc(100%)',
    },
    margin: '0',
  },
};
