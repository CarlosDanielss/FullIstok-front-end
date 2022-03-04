import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: '#322938',
      dark: '#1a161d',
      light: '#685874',
      contrastText: '#fff'
    },
    background: {
      default: '#202124',
      paper: '#303134'
    }
  },
  typography: {
    allVariants: {
      color: 'white'
    }
  }
});