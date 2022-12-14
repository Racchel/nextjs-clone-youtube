import { createTheme } from '@mui/material/styles';
import {colors} from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: colors.common.white,
      dark: '#f4f6f8',
      paper: colors.common.white,
    },
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3EA6FF',
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
});

export default theme;