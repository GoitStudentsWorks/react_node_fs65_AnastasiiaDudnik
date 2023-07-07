import Box from '@mui/material/Box';
import CalendarComponent from 'components/calendar/calendar';
import { CalendarToolbar } from 'components/calendarToolbar/calendarToolbar';

const CalendarPage = ({ mode }) => {
  return (
    <Box>
      <CalendarToolbar mode={mode} />
      <CalendarComponent />
    </Box>
  );
};

export default CalendarPage;
