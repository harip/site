import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple,red } from '@material-ui/core/colors';

const darkTheme = {
  backgroundColor: "#424242",
} 

const dark = createMuiTheme({  
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: darkTheme.backgroundColor,
        },
      },
    }, 
  }, 

  palette: { 
    type: 'dark', 
    customBackground: darkTheme.backgroundColor
  },
});

export default dark;