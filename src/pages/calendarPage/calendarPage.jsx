import Box from '@mui/material/Box';
import { CalendarToolbar } from 'components/calendarToolbar/calendarToolbar';
import { Outlet } from 'react-router-dom';

const CalendarPage = ({ mode, readDate }) => {
  return (
    <Box>
      <CalendarToolbar mode={mode} readDate={readDate} />
      <Outlet />
    </Box>
  );
};

export default CalendarPage;
