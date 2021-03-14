import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'; 

const darkTheme = {
  backgroundColor: "#424242", 
  boxShadowColor: "#151414"
} 

const dark = createMuiTheme({  
  overrides: {  
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: darkTheme.backgroundColor
        }, 
        pre: { 
          backgroundColor: "#101213 !important", 
        }
      }
    },
    MuiGrid: {
      item: {
        // Some CSS 
        boxShadow: '0px 6px 6px -3px #272424, 0px 10px 14px 1px #272424'
      },
    },
    MuiListItem : {
      selected : {
        color: 'red'
      }
    }
  }, 
  palette: { 
    type: 'dark', 
    customBackground: darkTheme.backgroundColor,
    selectedMenuItem: 'red'
  }
});

export default dark;