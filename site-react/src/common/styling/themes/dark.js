import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple,red } from '@material-ui/core/colors';

const darkTheme = {
  backgroundColor: "#424242",

  // background: '#fafafa'
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
    MuiGridList : {
      backgroundColor: red[500]
    },
    MuiGridList : {
      backgroundColor: red[500]
    }
  }, 

  palette: { 
    type: 'dark', 
    customBackground: darkTheme.backgroundColor
  },
});

export default dark;