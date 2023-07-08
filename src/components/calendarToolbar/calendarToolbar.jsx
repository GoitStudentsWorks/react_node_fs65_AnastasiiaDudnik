import Box from '@mui/material/Box';
import { PeriodPaginator } from 'components/periodPaginator/periodPaginator';
import { PeriodTypeSelect } from 'components/periodTypeSelect/periodTypeSelect';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const day = new Date();
const today = moment(day, 'YYYY-MM-DD');
const currentDate = today.format('YYYY-MM-DD');

export const CalendarToolbar = ({ mode }) => {
  const location = useLocation();
  const [type, setType] = useState('month');
  const [date, setDate] = useState(currentDate);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.includes('day')) {
      setType(location.pathname.slice(15, 18));
    }
  }, [location.pathname]);

  const selectDate = date => {
    navigate(`/main/calendar/${type}/${date}`);
    setDate(date);
  };

  const nextArray = () => {
    if (type === 'month') {
      const nextDate = moment(date).add(1, 'month').format('YYYY-MM-DD');
      return selectDate(nextDate);
    }
    const nextDate = moment(date).add(1, 'day').format('YYYY-MM-DD');
    return selectDate(nextDate);
  };
  const backArray = () => {
    if (type === 'month') {
      const previousDate = moment(date)
        .subtract(1, 'month')
        .format('YYYY-MM-DD');
      return selectDate(previousDate);
    }
    const previousDate = moment(date).subtract(1, 'day').format('YYYY-MM-DD');
    return selectDate(previousDate);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: { xs: '24px', lg: '32px' },
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <PeriodPaginator
          mode={mode}
          type={type}
          selectDate={selectDate}
          date={date}
          nextArray={nextArray}
          backArray={backArray}
        />
      </LocalizationProvider>
      <PeriodTypeSelect mode={mode} setType={setType} date={date} />
    </Box>
  );
};
