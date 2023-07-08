import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

export const PeriodTypeSelect = ({ mode, setType, date }) => {
  return (
    <List
      component="nav"
      sx={{
        p: 0,
        m: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        width: '164px',
      }}
    >
      <ListItem sx={{ p: 0 }}>
        <ListItemButton
          LinkComponent={NavLink}
          onClick={() => setType('month')}
          to={`/main/calendar/month/${date}`}
          sx={{
            backgroundColor: mode !== 'dark' ? '#21222C' : '#E3F3FF',
            color: '#3E85F3',
            py: { xs: '8px' },
            px: { xs: '16px' },
            borderRadius: '8px 0px 0px 8px',
            borderRight: `1px solid ${
              mode !== 'dark'
                ? 'rgba(255, 255, 255, 0.15)'
                : 'rgba(62, 133, 243, 0.20)'
            } `,
            '&.active, &:hover, &:focus': {
              backgroundColor: mode !== 'dark' ? '#3E85F3' : '#CAE8FF',
              color: mode !== 'dark' ? '#FFFFFF' : '#3E85F3',
            },
          }}
        >
          <ListItemText
            sx={{ m: 0 }}
            primary={
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: { xs: '14px', md: '16px' },
                  lineHeight: { xs: 1.286, md: 1.125 },
                }}
              >
                Month
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
      <ListItem sx={{ p: 0 }}>
        <ListItemButton
          LinkComponent={NavLink}
          onClick={() => setType('day')}
          to={`/main/calendar/day/${date}`}
          sx={{
            backgroundColor: mode !== 'dark' ? '#21222C' : '#E3F3FF',
            color: '#3E85F3',
            py: { xs: '8px' },
            px: { xs: '25px', md: '26px' },
            borderRadius: '0px 8px 8px 0px',
            '&.active, &:hover, &:focus': {
              backgroundColor: mode !== 'dark' ? '#3E85F3' : '#CAE8FF',
              color: mode !== 'dark' ? '#FFFFFF' : '#3E85F3',
            },
          }}
        >
          <ListItemText
            sx={{ m: 0 }}
            primary={
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: { xs: '14px', md: '16px' },
                  lineHeight: { xs: 1.286, md: 1.125 },
                }}
              >
                Day
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
