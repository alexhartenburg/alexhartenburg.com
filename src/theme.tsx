import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#01554f',    //Cape Verde
        light: '#87dcce',   //Tantalizing Teal
        dark: '#01858b'     //Gulfstream
    },
    secondary: {
      main: '#ffffff',
      light: '#000000',
      dark: '#444444'
    },
    error: {
      main: '#7b3728',    //Roycroft Copper Red
      light: '#7b3728',   //Roycroft Copper Red
      dark: '#7b3728'     //Roycroft Copper Red
    },
    warning: {
      main: '#D7552A',    //Obstinate Orange
      light: '#D7552A',   //Obstinate Orange
      dark: '#D7552A'     //Obstinate Orange
    },
    info: {
      main: '#027aa6',
      light: '#027aa6',
      dark: '#027aa6'
    },
    success: {
      main: '#029e6d',
      light: '#029e6d',
      dark: '#029e6d'
    },
  },
});

export default theme;