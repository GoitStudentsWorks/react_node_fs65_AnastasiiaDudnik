import React, { useState } from 'react';
import { Card, Typography, Avatar } from '@mui/material';
import TaskToolBar from './TaskToolbar/TaskToolbar';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

const TaskColumnCard = ({ taskText, priority, id, addCategory }) => {
  const user = useSelector(selectUser);

  const [isCut, setIsCut] = useState(true);
  const toggleCut = () => {
    setIsCut(!isCut);
  };

  const currentLanguageCode = Cookies.get('i18next');

  let styleObj = isCut
    ? { textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }
    : { textOverflow: 'clip', whiteSpace: 'normal', overflow: 'visible' };

  return (
    <Card sx={{ padding: '15px', backgroundColor: 'var(--secondary-background-color)', borderRadius: '8px' }}>
      <Typography
        onMouseEnter={toggleCut}
        onMouseLeave={toggleCut}
        variant="body2"
        sx={{ color: 'var(--primary-text-color)', fontFamily: 'Inter', fontStyle: 'medium', fontSize: '14px', maxWidth: '272px', margin: '0 0 28px 0', ...styleObj }}
      >
        {taskText}
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {user.avatarURL ? (
            <Avatar src={user.avatarURL} alt="user avatar" sx={{ width: '32px', height: '32px', borderRadius: '50%' }} />
          ) : (
            <Avatar sx={{ width: '32px', height: '32px', borderRadius: '50%', color: 'var(--secondary-text-color)', backgroundColor: 'var(--avatar-background-color)', fontSize: '25px', outline: '2px solid var(--accent-background-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', lineHeight: 0 }}>
              {user.name?.charAt(0).toUpperCase()}
            </Avatar>
          )}
          {currentLanguageCode === 'ua' && (
            <Typography variant="body2" sx={{ padding: '4px 12px', borderRadius: '4px', backgroundColor: priority.includes('low') ? 'var(--task-priority-low-color)' : priority.includes('medium') ? 'var(--task-priority-medium-color)' : 'var(--task-priority-high-color)', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {priority === 'low' && 'Низька'}
              {priority === 'medium' && 'Середня'}
              {priority === 'high' && 'Висока'}
            </Typography>
          )}
          {currentLanguageCode === 'en' && (
            <Typography variant="body2" sx={{ padding: '4px 12px', borderRadius: '4px', backgroundColor: priority.includes('low') ? 'var(--task-priority-low-color)' : priority.includes('medium') ? 'var(--task-priority-medium-color)' : 'var(--task-priority-high-color)', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {priority}
            </Typography>
          )}
        </div>
        <TaskToolBar id={id} addCategory={addCategory} />
      </div>
    </Card>
  );
};

export default TaskColumnCard;
