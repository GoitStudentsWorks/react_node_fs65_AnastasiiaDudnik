import { createTheme } from '@mui/material/styles';

const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3E85F3',
      dark: '#2B78EF',
      light: '#DCEBF7',
    },
    secondary: {
      main: '#E3F3FF',
      dark: '#DCEBF7',
    },
    background: {
      default: '#F7F6F9',
      paper: '#FFFFFF',
    },
    error: {
      main: '#DA1414',
    },
    success: {
      main: '#3CBC81',
    },
    text: {
      secondary: '#343434',
      primary: '#111',
      disabled: 'rgba(52, 52, 52, 0.50)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1440,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ['Inter', 'Poppins', 'sans-serif', 'Coolvetica'].join(', '),
  },
};

export const theme = createTheme(lightTheme);
