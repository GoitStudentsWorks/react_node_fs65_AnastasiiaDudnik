import { Outlet } from 'react-router';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CalendarToolbar from 'components/calendarToolbar/CalendarToolbar';
import ChoosedMonth from 'components/ChoosedMonth/ChoosedMonth';

const Calendar = ({ selectedDay, setSelectedDay }) => {
  const params = useParams();
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <Box>
      <Typography variant="h2">Calendar Page</Typography>
      <CalendarToolbar
        setCurrentDate={setCurrentDate}
        currentDate={currentDate}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      {!params?.currentDay && (
        <ChoosedMonth
          setCurrentDate={setCurrentDate}
          currentDate={currentDate}
          setSelectedDay={setSelectedDay}
        />
      )}
      <Outlet />
    </Box>
  );
};

export default Calendar;
