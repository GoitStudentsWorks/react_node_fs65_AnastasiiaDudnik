import React, { useEffect, useState } from 'react';
import sprite from 'icons/sprite.svg';
import { format, isValid } from 'date-fns';
import { SvgIcon as Svg, Box, Button, ButtonGroup } from '@mui/material';
import { Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { parseDate } from 'helpers/parseDate';
import { enGB, eo, uk } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

const locales = { enGB, eo, uk };

const PeriodPaginator = ({
  selectedDay,
  nextMonth,
  prevMonth,
  prevDay,
  currentDate,
  nextDay,
}) => {
  const params = useParams();
  const navigate = useNavigate();

  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    if (!params.currentDay) {
      return;
    }
    const parsedDate = parseDate(selectedDay);
    navigate(`/calendar/day/${parsedDate}`);
  }, [selectedDay, navigate, params.currentDay]);

  useEffect(() => {
    if (i18n.language === 'ua') {
      setLanguage('uk');
    } else {
      setLanguage('enGB');
    }
  }, [i18n.language]);

  const monthFormat = 'LLLL y';
  const dayFormat = 'd MMM y';

  const formattedMonth = format(currentDate, monthFormat, {
    locale: locales[language],
  });

  let formattedDay = '';
  if (isValid(selectedDay)) {
    formattedDay = format(selectedDay, dayFormat, {
      locale: locales[language],
    });
  }

  return (
    <Box display="flex" gap={2} justifyContent="space-between" width="100%">
      <Typography
        sx={{
          padding: '6px 12px',
          borderRadius: 8,
          fontWeight: 700,
          fontSize: 14,
          lineHeight: 1.29,
          textAlign: 'center',
          textTransform: 'uppercase',
          backgroundColor: 'var(--color-button-period-type)',
          color: 'var(--btn-text-color)',
          cursor: 'default',
          '@media screen and (min-width: 768px)': {
            padding: '8px 12px',
            fontSize: 16,
            lineHeight: 1.12,
          },
        }}
      >
        {params.currentDay ? formattedDay : formattedMonth}
      </Typography>
      <ButtonGroup
        sx={{
          display: 'flex',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        <Button
          onClick={params.currentDay ? prevDay : prevMonth}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '7px 10px',
            borderTopLeftRadius: 8,
            color: 'var(--calendar-digit-color)',
            borderBottomLeftRadius: 8,
            cursor: 'pointer',
            backgroundColor: 'var(--primary-background-color)',
            border: '1px solid rgba(220, 227, 229, 0.5)',
            '& > svg': {
              stroke: 'currentColor',
              fill: 'transparent',
            },
            '& > svg:hover, & > svg:focus': {
              stroke: 'var(--accent-span-text-color)',
              fill: 'transparent',
            },
          }}
        >
          <Svg width="16" height="16">
            <use href={`${sprite}#calendar-right-sf`}></use>
          </Svg>
        </Button>
        <Button
          onClick={params.currentDay ? nextDay : nextMonth}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '7px 10px',
            borderTopLeftRadius: 0,
            color: 'var(--calendar-digit-color)',
            borderBottomRightRadius: 8,
            borderTopRightRadius: 8,
            cursor: 'pointer',
            backgroundColor: 'var(--primary-background-color)',
            border: '1px solid rgba(220, 227, 229, 0.5)',
            '& > svg': {
              stroke: 'currentColor',
              fill: 'transparent',
            },
            '& > svg:hover, & > svg:focus': {
              stroke: 'var(--accent-span-text-color)',
              fill: 'transparent',
            },
          }}
        >
          <Svg width="16" height="16">
            <use href={`${sprite}#calendar-right-sf`}></use>
          </Svg>
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default PeriodPaginator;
