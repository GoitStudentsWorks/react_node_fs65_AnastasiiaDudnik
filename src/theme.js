import { createTheme } from '@mui/material/styles';

const lightTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1440,
      xl: 1536,
    },
  },
};

export const theme = createTheme(lightTheme);