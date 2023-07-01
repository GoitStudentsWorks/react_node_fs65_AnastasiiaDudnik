import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from '@mui/material';
import { format } from 'date-fns';
import { Notify } from 'notiflix';
import { useTranslation } from 'react-i18next';

import { useDateValidation } from 'helpers/useDateValidation';
import { addTask, patchTask } from 'redux/tasks/operations';
import { selectTasks } from 'redux/tasks/selectors';

import Icons from 'icons/sprite.svg';

const TaskForm = ({
  onCloseModal,
  showEditBtn,
  id,
  editTask,
  addCategory,
  setAnimationModal,
}) => {
  const [title, setTitle] = useState(editTask?.title || '');
  const [start, setStart] = useState(editTask?.start || '09:00');
  const [end, setEnd] = useState(editTask?.end || '09:30');
  const [priority, setPriority] = useState(editTask?.priority || 'low');
  const category = editTask?.category || 'to-do';
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const { i18n } = useTranslation();

  const validDate = useDateValidation();
  const currentDay = format(validDate, 'yyyy-MM-dd');

  const handleOptionChange = event => {
    setPriority(event.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const edit = {
      title,
      start,
      end,
      priority,
      date: currentDay,
      category,
    };
    const startTime = start.split(':');
    const endTime = end.split(':');

    const startHour = parseInt(startTime[0], 10);
    const endHour = parseInt(endTime[0], 10);
    const startMinute = parseInt(startTime[1], 10);
    const endMinute = parseInt(endTime[1], 10);

    if (
      startHour > endHour ||
      (startHour === endHour && startMinute >= endMinute)
    ) {
      Notify.warning(
        'Invalid time format. The start cannot be less than the end.'
      );

      return;
    }

    if (title.trim() === '' || start.trim() === '' || end.trim() === '') {
      Notify.warning('All fields must be filled.');
      return;
    }

    if (
      title === editTask?.title &&
      end === editTask?.end &&
      start === editTask?.start &&
      priority === editTask?.priority
    ) {
      Notify.warning('Change at least one field.');
      return;
    }

        if (tasks.find(task => task._id === id)) {
      dispatch(patchTask({ id, task: edit }));
      Notify.success('Successfully! The task has been changed');
      onCloseModal();
      return;
    }

    dispatch(addTask(edit));
    Notify.success('Successfully! The task has been added');
    onCloseModal();
  };

  const handleCategoryChange = event => {
    const value = event.target.value;
    if (value === 'newCategory') {
      const newCategory = prompt('Enter a new category:');
      if (newCategory) {
        addCategory(newCategory);
      }
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <TextField
        label="Title"
        variant="outlined"
        value={title}
        onChange={e => setTitle(e.target.value)}
        fullWidth
        required
      />

      <div className="task-form__time">
        <TextField
          label="Start"
          type="time"
          variant="outlined"
          value={start}
          onChange={e => setStart(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          required
        />

        <TextField
          label="End"
          type="time"
          variant="outlined"
          value={end}
          onChange={e => setEnd(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          required
        />
      </div>

      <FormControl component="fieldset">
        <FormLabel component="legend">Priority</FormLabel>
        <RadioGroup
          aria-label="priority"
          name="priority"
          value={priority}
          onChange={handleOptionChange}
          row
        >
          <FormControlLabel
            value="low"
            control={<Radio color="primary" />}
            label="Low"
          />
          <FormControlLabel
            value="medium"
            control={<Radio color="primary" />}
            label="Medium"
          />
          <FormControlLabel
            value="high"
            control={<Radio color="primary" />}
            label="High"
          />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Category</FormLabel>
        <RadioGroup
          aria-label="category"
          name="category"
          value={category}
          onChange={handleCategoryChange}
          row
        >
          {categories.map(cat => (
            <FormControlLabel
              key={cat}
              value={cat}
              control={<Radio color="primary" />}
              label={cat}
            />
          ))}
          <FormControlLabel
            value="newCategory"
            control={<Radio color="primary" />}
            label="Add New"
          />
        </RadioGroup>
      </FormControl>

      <div className="task-form__buttons">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="task-form__button"
        >
          {showEditBtn ? 'Edit Task' : 'Add Task'}
        </Button>
        <Button
          variant="contained"
          onClick={() => onCloseModal()}
          className="task-form__button"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
