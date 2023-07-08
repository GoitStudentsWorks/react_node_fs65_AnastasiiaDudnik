import { Button, SvgIcon, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DateCalendar } from '@mui/x-date-pickers';
import { colorsLight } from 'components/variables/colors';
import dayjs from 'dayjs';
import Sprite from 'icons/sprite.svg';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';

export const PeriodPaginator = ({
  mode,
  type,
  selectDate,
  date,
  nextArray,
  backArray,
}) => {


  const calendarRef = useRef(null);
  const [calendar, setCalendar] = useState(false);

  const formattedDate = moment(date).locale('uk').format('MMMM YYYY');
  const chooseFormattedDate = moment(date).locale('uk').format('DD MMMM YYYY');
  const dateObj = dayjs(date);

  useEffect(() => {
    const handleClickOutside = event => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setCalendar(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDatePicker = date => {
    const today = moment(date.$d, 'YYYY-MM-DD');
    const urlDate = today.format('YYYY-MM-DD');
    selectDate(urlDate);
    setCalendar(false);
  };

  return (
    <Box sx={{ display: 'flex' }} ref={calendarRef}>
      <Box
        sx={{
          width: '131px',
          backgroundColor: colorsLight.accentColor,
          textAlign: 'center',
          color: '#fff',
          mt: 'auto',
          mb: 'auto',
          pt: '8px',
          pb: '8px',
          borderRadius: '8px',
        }}
      >
        <Typography
          sx={{
            color: '#fff',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '18px',
            textTransform: 'uppercase',
            textAlign: 'center',
            position: 'reletive',
            cursor: 'pointer',
          }}
          onClick={() => setCalendar(!calendar)}
        >
          {type === 'month'
            ? formattedDate.slice(0, date.slength)
            : chooseFormattedDate}
        </Typography>
      </Box>
      <DateCalendar
        value={dateObj}
        sx={{
          display: calendar ? 'block' : 'none',
          position: 'absolute',
          zIndex: 100,
          backgroundColor: colorsLight.accentColor,
          top: '165px',
          borderRadius: '8px',
          color: '#fff',
          '& *': { color: '#fff' },
          '& * .css-x2lq26-MuiButtonBase-root-MuiPickersDay-root:hover': {
            backgroundColor: '#00a3ff',
          },
        }}
        onChange={handleDatePicker}
      />
      <Box
        sx={{
          maxHeight: '34px',
          borderRadius: '8px',
          border:
            mode === 'dark'
              ? '1px solid rgba(220,227,229, 0.80)'
              : '1px solid #FFFFFF26',
          ml: '8px',
        }}
      >
        <Button
          onClick={() => {
            backArray();
          }}
          sx={{
            minWidth: '38px',
            backgroundColor: mode === 'dark' ? '#fff' : '#21222C',
            textAlign: 'center',
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '0px',
            borderTopRightRadius: '0px',
            padding: '4px 0px',
          }}
        >
          <SvgIcon style={{ stroke: mode === 'dark' ? '#000' : '#fff' }}>
            <use href={`${Sprite}#chevron-left`} />
          </SvgIcon>
        </Button>
        <Button
          onClick={() => {
            nextArray();
          }}
          sx={{
            minWidth: '38px',
            backgroundColor: mode === 'dark' ? '#fff' : '#21222C',
            textAlign: 'center',
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '8px',
            borderTopRightRadius: '8px',
            borderLeft:
              mode === 'dark'
                ? '1px solid rgba(220,227,229, 0.80)'
                : '1px solid #FFFFFF26',
            padding: '4px 0px',
          }}
        >
          <SvgIcon style={{ stroke: mode === 'dark' ? '#000' : '#fff' }}>
            <use href={`${Sprite}#chevron-right`} />
          </SvgIcon>
        </Button>
      </Box>
    </Box>
  );
};
