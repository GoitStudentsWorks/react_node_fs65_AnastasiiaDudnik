import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { Box, List, ListItem } from '@mui/material';
import { parseDate } from 'helpers/parseDate';
import { nanoid } from 'nanoid';

const MonthTaskList = ({ date }) => {
  const tasks = useSelector(selectTasks);
  const parsedDate = parseDate(date);
  const filteredTasks = tasks?.filter(
    (item) => parseDate(new Date(item.date.split('T')[0])) === parsedDate
  );

  return (
    <List
      sx={{
        listStyle: 'none',
        padding: '0px 1px 5px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflowY: filteredTasks.length > 2 ? 'scroll' : 'no-scroll',
        maxHeight: '100%',
        gap: '1px',
        '@media screen and (min-width: 768px)': {
          padding: '0px 2px 5px',
        },
        '@media screen and (min-width: 1100px)': {},
        '&::-webkit-scrollbar': {
          width: '3px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'var(--scrollbar-bg-color)',
          borderRadius: '12px',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '12px',
          backgroundColor: 'var(--scrollbar-color)',
        },
        '&::-webkit-scrollbar-track:hover': {
          boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      {filteredTasks.length > 0 ? (
        filteredTasks
          ?.sort((a, b) => parseInt(a.start) - parseInt(b.start))
          .map((item) => (
            <ListItem
              key={item._id}
              sx={{
                padding: '4px 4px 4px 8px',
                fontWeight: 700,
                fontSize: '10px',
                lineHeight: '14px',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor:
                  item.priority === 'low'
                    ? 'var(--priority-low-bg-color)'
                    : item.priority === 'medium'
                    ? 'var(--priority-medium-bg-color)'
                    : 'var(--priority-high-bg-color)',
                color:
                  item.priority === 'low'
                    ? 'var(--task-priority-low-color)'
                    : item.priority === 'medium'
                    ? 'var(--task-priority-medium-color)'
                    : 'var(--task-priority-high-color)',
                textTransform: 'capitalize',
                whiteSpace: 'nowrap',
                width: '100%',
                minHeight: '22px',
                overflow: 'hidden',
                '-o-text-overflow': 'ellipsis',
                textOverflow: 'ellipsis',
                '&:hover, &:focus': {
                  backgroundColor:
                    item.priority === 'low'
                      ? 'var(--task-priority-low-checked-color)'
                      : item.priority === 'medium'
                      ? 'var(--task-priority-medium-checked-color)'
                      : 'var(--task-priority-high-checked-color)',
                },
                '@media screen and (min-width: 768px)': {
                  fontSize: '14px',
                  lineHeight: '1.29',
                  minHeight: '26px',
                },
                '@media screen and (min-width: 1100px)': {
                  paddingLeft: '12px',
                },
              }}
            >
              {item.title}
            </ListItem>
          ))
      ) : null}
    </List>
  );
};

export default MonthTaskList;
