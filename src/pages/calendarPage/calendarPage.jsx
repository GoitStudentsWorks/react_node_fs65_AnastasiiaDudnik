import Box from '@mui/material/Box';
import { CalendarToolbar } from 'components/calendarToolbar/calendarToolbar';
// import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';

const Calendar = ({ mode }) => {
  return (
    <Box>
      {/* <Typography paragraph>Calendar</Typography> */}
      <CalendarToolbar mode={mode} />
      <Outlet />
    </Box>
  );
};

export default Calendar;
