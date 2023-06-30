import React, { useEffect, useState } from 'react';
import { List } from '@mui/material';
import TaskColumnCard from './TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = ({ tasks, addCategory }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <List
      style={
        tasks.length === 0
          ? { height: '25px' }
          : { maxHeight: `${windowHeight - 500}px`, display: 'flex', flexDirection: 'column', overflow: 'auto', gap: 14 }
      }
    >
      {tasks.map((item) => (
        <TaskColumnCard
          taskText={item.title}
          priority={item.priority}
          id={item._id}
          key={item._id}
          addCategory={addCategory}
        />
      ))}
    </List>
  );
};

export default ColumnsTasksList;
