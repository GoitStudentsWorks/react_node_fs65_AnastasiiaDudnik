import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  Typography,
  Box,
  InputBase,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  SvgIcon,
  Alert,
  Snackbar,
} from '@mui/material';
import Sprite from 'icons/sprite.svg';
import { colorsLight } from 'components/variables/colors';

const TaskForm = ({ initialData, closeModal }) => {
  const defaultTask = {
    title: '',
    start: '00:00',
    end: '00:00',
    priority: 'Low',
    category: 'in-progress',
  };

  const [task, setTask] = useState(defaultTask);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setTask(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (task.start > task.end) {
      console.log('time error');
    } else {
      console.log('dispatch', task);
    }
  };

  return (
    <Formik initialValues={defaultTask}>
      <Form onSubmit={handleSubmit}>
        <Box
          sx={{
            padding: { xs: '48px 18px 40px', md: '40px 28px', lg: '40px 28px' },
          }}
        >
          <label>
            <Typography
              sx={{
                color: colorsLight.secondaryTextColor,
                fontSize: '12px',
                fontWeight: '500',
                lineHeight: '1.16',
                textAlign: 'start',
                marginBottom: '8px',
              }}
            >
              Title
            </Typography>
            <Field
              placeholder="Enter text"
              name="title"
              type="text"
              onChange={handleChange}
              value={task.title}
              as={InputBase}
              sx={{
                width: '100%',
                fontSize: '14px',
                fontWeight: 600,
                color: colorsLight.popUpInputTextColor,
                border: '1px solid rgba(17, 17, 17, 0.15)',
                borderRadius: '8px',
                padding: '8px 18px 7px 18px',
                marginBottom: { xs: '16px', md: '18px', lg: '18px' },
                backgroundColor: colorsLight.inputFieldColor,
              }}
            />
          </label>
          <Box
            sx={{
              display: 'flex',
              gap: '14px',
              marginBottom: { xs: '16px', md: '28px', lg: '28px' },
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <label>
                <Typography
                  sx={{
                    color: colorsLight.secondaryTextColor,
                    fontSize: '12px',
                    fontWeight: '500',
                    lineHeight: '1.16',
                    textAlign: 'start',
                    marginBottom: '8px',
                  }}
                >
                  Start
                </Typography>
                <Field
                  placeholder="Enter text"
                  name="start"
                  value={task.start}
                  type="time"
                  onChange={handleChange}
                  as={InputBase}
                  sx={{
                    width: '100%',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: colorsLight.popUpInputTextColor,
                    border: '1px solid rgba(17, 17, 17, 0.15)',
                    borderRadius: '8px',
                    padding: '8px 18px 7px 18px',
                    lineHeight: '1.28',
                    backgroundColor: colorsLight.inputFieldColor,
                  }}
                />
              </label>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <label>
                <Typography
                  sx={{
                    color: colorsLight.secondaryTextColor,
                    fontSize: '12px',
                    fontWeight: '500',
                    lineHeight: '1.16',
                    textAlign: 'start',
                    marginBottom: '8px',
                  }}
                >
                  End
                </Typography>
                <Field
                  placeholder="Enter text"
                  name="end"
                  value={task.end}
                  type="time"
                  onChange={handleChange}
                  as={InputBase}
                  sx={{
                    width: '100%',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: colorsLight.popUpInputTextColor,
                    border: '1px solid rgba(17, 17, 17, 0.15)',
                    borderRadius: '8px',
                    padding: '8px 18px 7px 18px',
                    lineHeight: '1.28',
                    backgroundColor: colorsLight.inputFieldColor,
                  }}
                />
              </label>
            </Box>
          </Box>

          <RadioGroup
            onChange={handleChange}
            value={task.priority}
            name="priority"
            sx={{
              flexDirection: 'row',
              flexWrap: 'nowrap',
              justifyContent: 'start',
              gap: '16px',
              marginBottom: '32px',
              height: { xs: '14px', md: '18px', lg: '18px' },
            }}
          >
            <FormControlLabel
              label="Low"
              value={'Low'}
              control={
                <Radio
                  sx={{
                    color: colorsLight.taskLowColor,
                    '& .MuiSvgIcon-root': {
                      fontSize: 14,
                    },
                    '&.Mui-checked': {
                      color: colorsLight.taskLowColor,
                    },
                  }}
                />
              }
            />
            <FormControlLabel
              label="Medium"
              value={'Medium'}
              control={
                <Radio
                  sx={{
                    color: colorsLight.taskMedColor,
                    '& .MuiSvgIcon-root': {
                      fontSize: 14,
                      padding: '0px',
                    },
                    '&.Mui-checked': {
                      color: colorsLight.taskMedColor,
                    },
                  }}
                />
              }
            />
            <FormControlLabel
              label="High"
              value={'High'}
              control={
                <Radio
                  sx={{
                    color: colorsLight.taskHighColor,
                    '& .MuiSvgIcon-root': {
                      fontSize: 14,
                    },
                    '&.Mui-checked': {
                      color: colorsLight.taskHighColor,
                    },
                  }}
                />
              }
            />
          </RadioGroup>

          <Box
            sx={{
              height: { xs: '42px', md: '48px', lg: '48px' },
              display: 'flex',
              gap: '14px',
            }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{
                height: '100%',
                flexGrow: '1',
                backgroundColor: colorsLight.accentBackgroundColor,
                boxShadow: 'none',
              }}
            >
              <SvgIcon
                stroke="currentColor"
                sx={{
                  width: { xs: '20px', md: '24px' },
                  height: { xs: '20px', md: '24px' },
                  fill: '#3E85F3;',
                }}
              >
                <use href={`${Sprite}#plus-circle`}></use>
              </SvgIcon>
              Add
            </Button>
            <Button
              variant="contained"
              onClick={closeModal}
              sx={{
                height: '100%',
                width: '144px',
                backgroundColor: colorsLight.taskCancelColor,
                color: colorsLight.mainTextColor,
                boxShadow: 'none',
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};

export default TaskForm;