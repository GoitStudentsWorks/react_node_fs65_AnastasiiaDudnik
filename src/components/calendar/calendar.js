import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getTasks } from 'redux/tasks/operations';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const navigate = useNavigate();
  const currentDate = dayjs();
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);
  const daysInMonth = currentDate.daysInMonth();
  const monthStart = currentDate.startOf('month').day();
  const firstDayOfWeek = 1; // Set the first day of the week as 1 (Monday)

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

    return calendar;
  };

  const cellStyle = {
    border: '1px solid #DCE3E5CC',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    boxSizing: 'border-box',
    justifyContent: 'flex-start',
    height: { xs: '94px', md: '126px' },
    padding: '8px 4px 2px',
    bgcolor: '#FFF',
    transition: 'transform 0.3s',
    cursor: 'pointer',
  };

  const cellTextStyle = {
    color: '#343434',
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

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await dispatch(getTasks({ date: currentDate }));

        if (response.meta.requestStatus === 'fulfilled') {
          const tasks = response.payload.tasks;
          setTasks(tasks);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, [dispatch, currentDate]);

  return (
    <Container
      sx={{ height: 'auto', display: 'flex', flexDirection: 'column' }}
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
          gridTemplateColumns="repeat(7, 1fr)"
          grid-template-rows="repeat(6, 1fr)"
          sx={{
            height: {
              xs: 'calc(100vh - 340px)',
              md: 'calc(100vh - 280px);',
              lg: 'height: calc(100vh - 270px);',
            },
            overflowY: 'auto',
          }}
        >
          {renderCalendar()}
        </Box>
      </Box>
    </Container>
  );
};

export default Calendar;
