import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#322938',
      dark: '#1a161d',
      light: '#685874',
      contrastText: 'black'
    },
    background: {
      default: '#f7f8f3',
      paper: '#fff'
    }
  },
  typography: {
    allVariants: {
      color: 'black'
    }
  }
});