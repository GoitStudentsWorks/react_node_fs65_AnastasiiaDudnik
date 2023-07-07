import Box from '@mui/material/Box';
import { CalendarToolbar } from 'components/calendarToolbar/calendarToolbar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const CalendarPage = ({ mode }) => {
  return (
    <Box>
      <CalendarToolbar mode={mode} />
      <Outlet />
    </Box>
  );
};

export default CalendarPage;
