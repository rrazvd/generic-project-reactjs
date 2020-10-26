import { createMuiTheme } from '@material-ui/core/styles';

const MainTheme = {
  lightBackground: '#FFFFFF',
  darkBackground: '#232228',
};

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5DBCD2',
    },
    secondary: {
      main: '#1D1D1E',
    },
  },
});

export { MainTheme, Theme };
