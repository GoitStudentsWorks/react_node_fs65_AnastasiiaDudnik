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

export const UserNav = ({ handleDrawerToggle, mode }) => {
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
          color: mode !== 'dark' ? '#FAFAFA4D' : 'text.disabled',
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
              backgroundColor:
                mode !== 'dark' ? '#13151A' : 'background.default',
              color: mode !== 'dark' ? '#fff' : 'text.disabled',
              gap: { xs: '8px', md: '10px' },
              py: { xs: '10px', md: '16px' },
              pl: { xs: '12px', md: '20px' },
              borderRadius: '8px',
              '&.active, &:hover, &:focus': {
                backgroundColor: mode !== 'dark' ? '#3E85F3' : 'secondary.main',
                color: mode !== 'dark' ? '#fff' : 'primary.main',
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
              backgroundColor:
                mode !== 'dark' ? '#13151A' : 'background.default',
              color: mode !== 'dark' ? '#fff' : 'text.disabled',
              gap: { xs: '8px', md: '10px' },
              py: { xs: '10px', md: '16px' },
              pl: { xs: '12px', md: '20px' },
              borderRadius: '8px',
              '&.active, &:hover, &:focus': {
                backgroundColor: mode !== 'dark' ? '#3E85F3' : 'secondary.main',
                color: mode !== 'dark' ? '#fff' : 'primary.main',
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
              backgroundColor:
                mode !== 'dark' ? '#13151A' : 'background.default',
              color: mode !== 'dark' ? '#fff' : 'text.disabled',
              gap: { xs: '8px', md: '10px' },
              py: { xs: '10px', md: '16px' },
              pl: { xs: '12px', md: '20px' },
              borderRadius: '8px',
              '&.active, &:hover, &:focus': {
                backgroundColor: mode !== 'dark' ? '#3E85F3' : 'secondary.main',
                color: mode !== 'dark' ? '#fff' : 'primary.main',
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
