import React, { useEffect, useMemo, useState } from 'react';
import { Box, Typography, createTheme, useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getTasks } from 'redux/tasks/operations';
import dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router-dom';

const Calendar = ({ mode }) => {
  const theme = createTheme();
  const { day } = useParams();
  const navigate = useNavigate();
  const currentDate = useMemo(() => dayjs(new Date(day)), [day]);
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const daysInMonth = currentDate.daysInMonth();

  const monthStart = currentDate.startOf('month').day();
  const firstDayOfWeek = 1;

  const cellStyle = {
    border: `1px solid ${mode !== 'dark' ? 'rgba(255, 255, 255, 0.15)' : '#DCE3E5CC'
      }`,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    boxSizing: 'border-box',
    justifyContent: 'flex-start',
    padding: '8px 4px 2px',
    bgcolor: mode !== 'dark' ? '#21222C' : '#FFF',
    transition: 'transform 0.3s',
    cursor: 'pointer',
  };

  const cellTextStyle = {
    color: mode !== 'dark' ? '#FFF' : '#343434',
    fontSize: '16px',
    boxSizing: 'border-box',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: 700,
    marginRight: '10px',
    lineHeight: '18px',
    textTransform: 'uppercase',
  };

  const scaleAnimation = `
    @keyframes scaleAnimation {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1.2);
      }
    }
  `;
  const renderCalendar = () => {
    const calendar = [];
    const offset = (monthStart - firstDayOfWeek + 7) % 7;
    const getTasksForDate = date => {
      return tasks.filter(task => {
        return dayjs(task.date).isSame(date, 'day');
      });
    };

    for (let i = 0; i < offset; i++) {
      calendar.push(<Box key={`empty-${i}`} sx={cellStyle} />);
    }

    const remainingCells = 7 - ((offset + daysInMonth) % 7);

    for (let i = 1; i <= daysInMonth; i++) {
      const date = currentDate.date(i);
      const isCurrentDay = dayjs().isSame(date, 'day');

      const tasksForDate = getTasksForDate(date);
      calendar.push(
        <Box
          key={`day-${i}`}
          onClick={() =>
            navigate(`/main/calendar/day/${date.format('YYYY-MM-DD')}`)
          }
          sx={{
            ...cellStyle,
            animation: `${scaleAnimation} 1s linear infinite alternate`,
            height: {
              xs: `calc((100vh - 248px) / ${(daysInMonth + offset + remainingCells) / 7})`,
              md: `calc((100vh - 280px) / ${(daysInMonth + offset + remainingCells) / 7})`,
              lg: `calc((100vh - 290px) / ${(daysInMonth + offset + remainingCells) / 7})`,
            },
            ':hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <Typography
            sx={{
              ...cellTextStyle,
              ...(isCurrentDay && {
                color: '#FFF',
                padding: '4px 9px',
                bgcolor: '#3E85F3',
                borderRadius: '8px',
              }),
            }}
            component={'p'}
            mb={'12px'}
          >
            {i}
          </Typography>

          {tasksForDate.map(task => (
            <Typography
              key={task._id}
              sx={{
                width: '90%',
                p: '4px 10px',
                mb: '5px',
                boxSizing: 'border-box',
                whiteSpace: 'nowrap',
                bgcolor:
                  task.priority === 'high'
                    ? '#FFD2DD'
                    : task.priority === 'medium'
                      ? '#FCF0D4'
                      : '#CEEEFD',
                color:
                  task.priority === 'high'
                    ? '#EA3D65'
                    : task.priority === 'medium'
                      ? '#F3B249'
                      : '#3E85F3',
                overflow: 'hidden',
                borderRadius: '8px',
                textOverflow: 'ellipsis',
              }}
              component={'p'}
            >
              {task.title}
            </Typography>
          ))}
        </Box>
      );
    }
    for (let i = 0; i < remainingCells; i++) {
      calendar.push(<Box key={`empty-${daysInMonth + i}`} sx={cellStyle} />);
    }

    return calendar;
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await dispatch(
          getTasks({
            month: '0' + (currentDate.$M + 1),
            year: currentDate.$y + '',
          })
        );

        if (response.meta.requestStatus === 'fulfilled') {
          const tasks = response.payload.tasks;
          setTasks(tasks);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, [currentDate, dispatch]);
  return (
    <Box
      key={tasks.length}
      sx={{
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box
          display={'flex'}
          maxWidth={'100%'}
          p={{ xs: '16px', md: '14px 60px' }}
          justifyContent={'space-between'}
          bgcolor={mode === 'dark' ? '#FFF' : '#21222C'}
          borderRadius={'8px'}
          border={`1px solid ${mode === 'dark'
            ? 'rgba(220, 227, 229, 0.80)'
            : 'rgba(255, 255, 255, 0.15)'
            }`}
          mb={'15px'}
        >
          <Typography align="center" sx={cellTextStyle}>
            {isMobile ? 'M' : 'Mon'}
          </Typography>
          <Typography align="center" sx={cellTextStyle}>
            {isMobile ? 'T' : 'Tue'}
          </Typography>
          <Typography align="center" sx={cellTextStyle}>
            {isMobile ? 'W' : 'Wed'}
          </Typography>
          <Typography align="center" sx={cellTextStyle}>
            {isMobile ? 'T' : 'Thu'}
          </Typography>
          <Typography align="center" sx={cellTextStyle}>
            {isMobile ? 'F' : 'Fri'}
          </Typography>
          <Typography align="center" sx={{...cellTextStyle, color: '#3E85F3'}}>
            {isMobile ? 'S' : 'Sat'}
          </Typography>
          <Typography align="center" sx={{...cellTextStyle, color: '#3E85F3'}}>
            {isMobile ? 'S' : 'Sun'}
          </Typography>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(7, 1fr)"
          gridTemplate-rows="repeat(6, 1fr)"
          sx={{
            // height: {
            //   xs: 'calc(100vh - 248px)',
            //   md: 'calc(100vh - 280px);',
            //   lg: 'calc(100vh - 290px);',
            // },
            // overflowY: 'auto',
          }}
        >
          {renderCalendar()}
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
