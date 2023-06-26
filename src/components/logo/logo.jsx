import { NavLink } from 'react-router-dom';
import {
  Box,
  Button,
  IconButton,
  SvgIcon,
  Toolbar,
  Typography,
} from '@mui/material';
import Sprite from '../../icons/sprite.svg';
import logoMb from '../../images/GOOSE1.png';
import logoTb from '../../images/GOOSE2.png';
import logoDes from '../../images/GOOSE3.png';

export const Logo = ({ handleDrawerToggle }) => {
  return (
    <Toolbar
      sx={{
        p: { xs: 0 },
        minHeight: { xs: 35 },
        alignItems: { xs: 'center' },
        justifyContent: { xs: 'space-between' },
      }}
    >
      <Button
        component={NavLink}
        to="/calendar"
        onClick={handleDrawerToggle}
        sx={{
          p: 0,
          minWidth: 0,
          minHeight: 35,
          gap: { xs: '6px', lg: '10px' },
        }}
      >
        <Box
          component="img"
          sx={{
            width: 36,
            height: 35,
            display: { md: 'none' },
          }}
          alt="Goose logo"
          src={logoMb}
        />
        <Box
          component="img"
          sx={{
            width: 60,
            height: 58,
            display: { xs: 'none', md: 'block', lg: 'none' },
          }}
          alt="Goose logo"
          src={logoTb}
        />
        <Box
          component="img"
          sx={{
            width: 71,
            height: 68,
            display: { xs: 'none', lg: 'block' },
          }}
          alt="Goose logo"
          src={logoDes}
        />
        <Typography>
          <Typography
            component="span"
            sx={{
              fontFamily: 'Coolvetica, sans-serif',
              fontStyle: 'normal',
              fontSize: { xs: '16px', md: '18px', lg: '24px' },
              lineHeight: { xs: 1.375, md: 1.333, lg: 1 },
              color: 'primary.main',
              textTransform: 'none',
              textShadow:
                '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07)',
            }}
          >
            G
          </Typography>
          <Typography
            component="span"
            sx={{
              fontFamily: 'Coolvetica, sans-serif',
              fontStyle: 'italic',
              fontSize: { xs: '16px', md: '18px', lg: '24px' },
              lineHeight: { xs: 1.375, md: 1.333, lg: 1 },
              color: 'primary.main',
              textTransform: 'none',
              textShadow:
                '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07)',
            }}
          >
            oo
          </Typography>
          <Typography
            component="span"
            sx={{
              fontFamily: 'Coolvetica, sans-serif',
              fontStyle: 'normal',
              fontSize: { xs: '16px', md: '18px', lg: '24px' },
              lineHeight: { xs: 1.375, md: 1.333, lg: 1 },
              color: 'primary.main',
              textTransform: 'none',
              textShadow:
                '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07)',
            }}
          >
            seTrack
          </Typography>
        </Typography>
      </Button>
      <IconButton
        color="text.secondary"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          display: { lg: 'none' },
          p: 0,
          m: 0,
        }}
      >
        <SvgIcon
          sx={{ width: { md: 33 }, height: { md: 33 } }}
          stroke="currentColor"
        >
          <use href={`${Sprite}#close`}></use>
        </SvgIcon>
      </IconButton>
    </Toolbar>
  );
};
