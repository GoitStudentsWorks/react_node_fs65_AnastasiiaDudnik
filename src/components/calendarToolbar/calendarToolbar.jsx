import Box from '@mui/material/Box';
import { PeriodPaginator } from 'components/periodPaginator/periodPaginator';
import { PeriodTypeSelect } from 'components/periodTypeSelect/periodTypeSelect';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const day = new Date();
const today = moment(day, 'YYYY-MM-DD');
const currentDate = today.format('YYYY-MM-DD');

export const CalendarToolbar = ({ mode }) => {
  const [type, setType] = useState('month');
  const [date, setDate] = useState(currentDate);
  const navigate = useNavigate();

  const selectDate = date => {
    navigate(`/main/calendar/${type}/${date}`);
    setDate(date);
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
        <PeriodPaginator mode={mode} type={type} selectDate={selectDate} />
      </LocalizationProvider>
      <PeriodTypeSelect mode={mode} setType={setType} date={date} />
    </Box>
  );
};
