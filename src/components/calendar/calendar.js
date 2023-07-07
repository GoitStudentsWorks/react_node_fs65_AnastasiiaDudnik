import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import dayjs from 'dayjs';

const Calendar = () => {
  const currentDate = dayjs();
  const daysInMonth = currentDate.daysInMonth();
  const monthStart = currentDate.startOf('month').day();
  const firstDayOfWeek = 1; // Set the first day of the week as 1 (Monday)

  const renderCalendar = () => {
    const calendar = [];
    const offset = (monthStart - firstDayOfWeek + 7) % 7;

    for (let i = 0; i < offset; i++) {
      calendar.push(<Box key={`empty-${i}`} sx={cellStyle} />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push(
        <Box key={`day-${i}`} sx={cellStyle}>
          <Typography sx={cellTextStyle}>{i}</Typography>
        </Box>
      );
    }

    return calendar;
  };

  const cellStyle = {
    border: '1px solid #DCE3E5CC',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingTop: '18px',
    paddingRight: '22px',
    bgcolor: '#FFF',
  };

  const cellTextStyle = {
    color: '#343434',
    fontSize: '16px',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '18px',
    textTransform: 'uppercase',
  };

  return (
    <Container
      sx={{ height: '90vh', display: 'flex', flexDirection: 'column' }}
    >
      <Box sx={{ flex: 1 }}>
        <Box
          display={'flex'}
          maxWidth={'100%'}
          p={'14px 60px'}
          justifyContent={'space-between'}
          bgcolor={'#FFF'}
          borderRadius={'8px'}
          border={'1px solid rgba(220, 227, 229, 0.80)'}
          mb={'15px'}
        >
          <Typography align="center" sx={cellTextStyle}>
            Mon
          </Typography>
          <Typography align="center" sx={cellTextStyle}>
            Tue
          </Typography>
          <Typography align="center" sx={cellTextStyle}>
            Wed
          </Typography>
          <Typography align="center" sx={cellTextStyle}>
            Thu
          </Typography>
          <Typography align="center" sx={cellTextStyle}>
            Fri
          </Typography>
          <Typography align="center" sx={cellTextStyle}>
            Sat
          </Typography>
          <Typography align="center" sx={cellTextStyle}>
            Sun
          </Typography>
        </Box>

        <Box
          display="grid"
          gap={0}
          gridTemplateColumns="repeat(7, 1fr)"
          sx={{ height: 'calc(100% - 78px)', overflowY: 'auto' }}
        >
          {renderCalendar()}
        </Box>
      </Box>
    </Container>
  );
};

export default Calendar;
