import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple,red } from '@material-ui/core/colors';

const dark = createMuiTheme({
  palette: {
    type: 'dark',
    // primary: {
    //   // Purple and green play nicely together.
    //   main: red[500],
    // },
    // secondary: {
    //   // This is green.A700 as hex.
    //   main: '#11cb5f',
    // },
    // test: {
    //   // Purple and green play nicely together. 
    //   background: 'red',
    // }
  },
});

export default dark;