import React from 'react';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { parseDate } from 'helpers/parseDate';
import { useParams, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PeriodTypeSelect = ({
  setSelectedDay,
  selectedDay,
  currentDate,
  setCurrentDate,
}) => {
  const { i18n } = useTranslation();
  const params = useParams();
  const parsedDate = parseDate(currentDate);

  return (
    <Box display="flex" justifyContent="flex-start" width="100%">
      <ButtonGroup
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        <Button
          component={NavLink}
          to="/calendar"
          end
          onClick={() => {
            setCurrentDate(selectedDay);
          }}
          sx={{
            color: 'var(--color-button-period-type)',
            padding: '8px 16px',
            backgroundColor: 'var(--button-period-type)',
            minWidth: 76,
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 1.29,
            cursor: params.currentDay ? 'default' : 'pointer',
            textAlign: 'center',
            transition: 'background-color var(--animation), color var(--animation)',
            '&:hover, &:focus, &:active, &.active': {
              backgroundColor: 'var(--active-button-period-type)',
              color: 'var(--accent-text-color)',
            },
            '@media screen and (min-width: 768px)': {
              fontSize: 16,
              lineHeight: 1.12,
            },
          }}
        >
          {i18n.language === 'en' ? 'Month' : 'Місяць'}
        </Button>
        <Button
          component={NavLink}
          to={`day/${parsedDate}`}
          onClick={() => {
            setSelectedDay(currentDate);
          }}
          className={window.location.pathname.includes('/day/') ? 'active' : ''}
          disabled={params.currentDay ? true : false}
          sx={{
            color: 'var(--color-button-period-type)',
            padding: '8px 16px',
            backgroundColor: 'var(--button-period-type)',
            minWidth: 76,
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 1.29,
            cursor: params.currentDay ? 'default' : 'pointer',
            textAlign: 'center',
            transition: 'background-color var(--animation), color var(--animation)',
            '&:hover, &:focus, &:active, &.active': {
              backgroundColor: 'var(--active-button-period-type)',
              color: 'var(--accent-text-color)',
            },
            '@media screen and (min-width: 768px)': {
              fontSize: 16,
              lineHeight: 1.12,
            },
          }}
        >
          {i18n.language === 'en' ? 'Day' : 'День'}
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default PeriodTypeSelect;