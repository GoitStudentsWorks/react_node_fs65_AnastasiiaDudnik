import React from 'react';
import { Box } from '@mui/system';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import CalendarTable from './CalendarTable/CalendarTable';

const ChoosedMonth = ({ currentDate, setCurrentDate, setSelectedDay }) => {
  return (
    <Box className="calendar">
      <MonthCalendarHead currentDate={currentDate} />
      <CalendarTable
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        setSelectedDay={setSelectedDay}
      />
    </Box>
  );
};

export default ChoosedMonth;
