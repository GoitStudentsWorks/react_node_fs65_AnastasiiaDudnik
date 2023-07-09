import Box from '@mui/material/Box';
import { PeriodPaginator } from 'components/periodPaginator/periodPaginator';
import { PeriodTypeSelect } from 'components/periodTypeSelect/periodTypeSelect';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

export const CalendarToolbar = ({ mode, readDate }) => {
  const location = useLocation();
  const { day } = useParams();
  const [type, setType] = useState(location.pathname.slice(15, 20));
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [openCalendat, setOpenCalendar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setDate(day);
    if (location.pathname.includes('month')) {
      setType('month');
    } else {
      setType('day');
    }
  }, [day, location.pathname]);

  const selectDate = date => {
    if (type === 'month' && openCalendat) {
      navigate(`/main/calendar/day/${date}`);
    } else if (type === 'month' && !openCalendat) {
      navigate(`/main/calendar/month/${date}`);
    } else {
      navigate(`/main/calendar/day/${date}`);
    }
  };

  const nextArray = () => {
    const nextDate =
      type === 'month'
        ? moment(date).add(1, 'month')
        : moment(date).add(1, 'day');
    selectDate(nextDate.format('YYYY-MM-DD'));
    readDate(nextDate.format('YYYY-MM-DD'));
  };

  const backArray = () => {
    const previousDate =
      type === 'month'
        ? moment(date).subtract(1, 'month')
        : moment(date).subtract(1, 'day');
    selectDate(previousDate.format('YYYY-MM-DD'));
    readDate(previousDate.format('YYYY-MM-DD'));
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
          setOpenCalendar={setOpenCalendar}
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
