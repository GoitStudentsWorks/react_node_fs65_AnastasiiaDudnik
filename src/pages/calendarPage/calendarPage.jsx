import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';

const Calendar = () => {
  return (
    <Box>
      <Typography paragraph>Calendar</Typography>
      <Outlet />
    </Box>
  );
};

export default Calendar;
