import React from 'react';
import { addMonths, subMonths, addDays, subDays } from 'date-fns';
import PeriodPaginator from 'components/calendarToolbar/PeriodPaginator/PeriodPaginator';
import { Box } from '@mui/material'; // Import Box component from MUI
import PeriodTypeSelect from 'components/calendarToolbar/PeriodTypeSelect/PeriodTypeSelect';

const CalendarToolbar = ({
  setCurrentDate,
  currentDate,
  selectedDay,
  setSelectedDay,
}) => {
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };
  const nextDay = () => {
    setSelectedDay(addDays(selectedDay, 1));
  };
  const prevDay = () => {
    setSelectedDay(subDays(selectedDay, 1));
  };
  return (
    <>
      <Box> {/* Replace PeriodContainer with Box */}
        <PeriodPaginator
          nextMonth={nextMonth}
          prevMonth={prevMonth}
          prevDay={prevDay}
          nextDay={nextDay}
          selectedDay={selectedDay}
          currentDate={currentDate}
        />
        <PeriodTypeSelect
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </Box>
    </>
  );
};

export default CalendarToolbar;
