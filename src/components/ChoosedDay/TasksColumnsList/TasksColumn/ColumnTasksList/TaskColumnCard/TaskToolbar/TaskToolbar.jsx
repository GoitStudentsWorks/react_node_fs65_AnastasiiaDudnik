import React, { useEffect, useRef, useState } from 'react';
import { Button, SvgIcon, MenuItem, Select } from '@mui/material';
import Icons from 'images/sprite.svg';
import TaskModal from '../../../TaskModal/TaskModal';

import { deleteTask, fetchDayTasks, patchTask } from 'redux/tasks/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const TaskToolBar = ({ id, addCategory }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  let editTask = tasks.find((task) => task._id === id);

  const currentLanguageCode = Cookies.get('i18next');

  const category = [
    { name: 'to-do', en: 'To do', ua: 'Зробити' },
    { name: 'in-progress', en: 'In progress', ua: 'В процесі' },
    { name: 'done', en: 'Done', ua: 'Зроблено' },
  ];

  const [showEditBtn, setShowEditBtn] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  const handleToggleModal = () => {
    setIsOpened(!isOpened);
  };

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
    editTask = { ...editTask, category: event.target.value };

    dispatch(patchTask({ id: id, task: { category: editTask.category } }));
  }

  let { currentDay } = useParams();

  const onDeleteHendler = async () => {
    await dispatch(deleteTask(id));

    const date = new Date(currentDay);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const reqObj = {
      month,
      day,
      year,
      page: 1,
      limit: 100,
    };
    await dispatch(fetchDayTasks(reqObj));
  };

  const chouseCatRef = useRef(null);
  useEffect(() => {
    const handleChouseCatClickOutside = (e) => {
      if (chouseCatRef.current && !chouseCatRef.current.contains(e.target)) {
        setIsClicked(false);
      }
    };

    document.addEventListener('mousedown', handleChouseCatClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleChouseCatClickOutside);
    };
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        <Button
          onClick={handleClick}
          sx={{
            backgroundColor: 'transparent',
            p: 0,
            '&:hover': {
              stroke: 'var(--color-button-period-type)',
            },
          }}
        >
          <SvgIcon
            component={Icons}
            viewBox="0 0 16 16"
            sx={{
              stroke: 'var(--close-btn-color)',
              fill: 'transparent',
              width: '16px',
              height: '16px',
            }}
          >
            <use href="#task-move-sf" />
          </SvgIcon>
        </Button>

        <div
          ref={chouseCatRef}
          style={isClicked ? { display: 'flex' } : { display: 'none' }}
        >
          {category.map((item) => {
            return (
              item.name !== editTask.category && (
                <div key={Math.random()}>
                  <label
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {currentLanguageCode === 'en' ? item.en : item.ua}
                    <SvgIcon
                      component={Icons}
                      viewBox="0 0 16 16"
                      sx={{
                        stroke: 'var(--close-btn-color)',
                        fill: 'transparent',
                        width: '16px',
                        height: '16px',
                      }}
                    >
                      <use href="#task-move-sf" />
                    </SvgIcon>
                    <input
                      type="radio"
                      value={item.name}
                      checked={selectedOption === item.name}
                      onChange={handleOptionChange}
                      style={{
                        position: 'absolute',
                        opacity: 0,
                        width: 0,
                        height: 0,
                      }}
                    />
                  </label>
                </div>
              )
            );
          })}
        </div>
      </div>

      <Button
        onClick={() => {
          handleToggleModal();
          setShowEditBtn(true);
        }}
        sx={{
          backgroundColor: 'transparent',
          p: 0,
          '&:hover': {
            stroke: 'var(--color-button-period-type)',
          },
        }}
      >
        <SvgIcon
          component={Icons}
          viewBox="0 0 16 16"
          sx={{
            stroke: 'var(--close-btn-color)',
            fill: 'transparent',
            width: '16px',
            height: '16px',
          }}
        >
          <use href="#task-edit-sf" />
        </SvgIcon>
      </Button>

      <Button
        onClick={onDeleteHendler}
        sx={{
          backgroundColor: 'transparent',
          p: 0,
          '&:hover': {
            stroke: 'var(--color-button-period-type)',
          },
        }}
      >
        <SvgIcon
          component={Icons}
          viewBox="0 0 16 16"
          sx={{
            stroke: 'var(--close-btn-color)',
            fill: 'transparent',
            width: '16px',
            height: '16px',
          }}
        >
          <use href="#task-trash-sf" />
        </SvgIcon>
      </Button>

      {isOpened && (
        <TaskModal
          onCloseModal={handleToggleModal}
          showEditBtn={showEditBtn}
          id={id}
          editTask={editTask}
          addCategory={addCategory}
          isOpened={isOpened}
        />
      )}
    </div>
  );
};

export default TaskToolBar;
