import * as React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SvgIcon,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import Sprite from '../../icons/sprite.svg';

export const UserNav = ({ handleDrawerToggle }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: { xs: '64px', md: '50px', lg: '32px' },
        gap: { xs: '24px', md: '32px' },
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: { xs: '12px', md: '14px' },
          color: 'text.disabled',
        }}
      >
        User Panel
      </Typography>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 0,
          gap: { xs: '18px', md: '16px' },
        }}
      >
        <ListItem onClick={handleDrawerToggle} disablePadding>
          <ListItemButton
            LinkComponent={NavLink}
            to="/main/account"
            sx={{
              backgroundColor: 'background.paper',
              color: 'text.disabled',
              gap: { xs: '8px', md: '10px' },
              py: { xs: '10px', md: '16px' },
              pl: { xs: '12px', md: '20px' },
              borderRadius: '8px',
              '&.active, &:hover, &:focus': {
                backgroundColor: 'secondary.main',
                color: 'primary.main',
              },
            }}
          >
            <SvgIcon
              stroke="currentColor"
              sx={{
                width: { xs: '20px', md: '24px' },
                height: { xs: '20px', md: '24px' },
              }}
            >
              <use href={`${Sprite}#user`}></use>
            </SvgIcon>
            <ListItemText
              sx={{ m: 0 }}
              primary={
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: { xs: '14px', md: '16px' },
                  }}
                >
                  My account
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={handleDrawerToggle} disablePadding>
          <ListItemButton
            LinkComponent={NavLink}
            to="/main/calendar"
            sx={{
              backgroundColor: 'background.paper',
              color: 'text.disabled',
              gap: { xs: '8px', md: '10px' },
              py: { xs: '10px', md: '16px' },
              pl: { xs: '12px', md: '20px' },
              borderRadius: '8px',
              '&.active, &:hover, &:focus': {
                backgroundColor: 'secondary.main',
                color: 'primary.main',
              },
            }}
          >
            <SvgIcon
              stroke="currentColor"
              sx={{
                width: { xs: '20px', md: '24px' },
                height: { xs: '20px', md: '24px' },
              }}
            >
              <use href={`${Sprite}#calendar`}></use>
            </SvgIcon>
            <ListItemText
              sx={{ m: 0 }}
              primary={
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: { xs: '14px', md: '16px' },
                  }}
                >
                  Calendar
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={handleDrawerToggle} disablePadding>
          <ListItemButton
            LinkComponent={NavLink}
            to="/main/statistics"
            sx={{
              backgroundColor: 'background.paper',
              color: 'text.disabled',
              gap: { xs: '8px', md: '10px' },
              py: { xs: '10px', md: '16px' },
              pl: { xs: '12px', md: '20px' },
              borderRadius: '8px',
              '&.active, &:hover, &:focus': {
                backgroundColor: 'secondary.main',
                color: 'primary.main',
              },
            }}
          >
            <SvgIcon
              stroke="currentColor"
              sx={{
                width: { xs: '20px', md: '24px' },
                height: { xs: '20px', md: '24px' },
              }}
            >
              <use href={`${Sprite}#chart`}></use>
            </SvgIcon>
            <ListItemText
              sx={{ m: 0 }}
              primary={
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: { xs: '14px', md: '16px' },
                  }}
                >
                  Statistics
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
