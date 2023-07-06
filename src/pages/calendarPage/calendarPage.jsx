import Box from '@mui/material/Box';
// import Calendar from 'components/calendar/calendar';
import { CalendarToolbar } from 'components/calendarToolbar/calendarToolbar';
import { Outlet } from 'react-router-dom';

const CalendarPage = ({ mode }) => {
  return (
    <Box>
      <CalendarToolbar mode={mode} />
      <Outlet />
      {/* <Calendar /> */}
    </Box>
  );
};

export default CalendarPage;
