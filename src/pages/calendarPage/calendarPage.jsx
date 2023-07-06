import Box from '@mui/material/Box';
import Calendar from 'components/calendar/calendar';
import { CalendarToolbar } from 'components/calendarToolbar/calendarToolbar';

const CalendarPage = ({ mode }) => {
  return (
    <Box>
      <CalendarToolbar mode={mode} />
      <Calendar />
    </Box>
  );
};

export default CalendarPage;
