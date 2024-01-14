import { createTheme, ThemeProvider, StyledEngineProvider, adaptV4Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

const darkTheme = {
  backgroundColor: "#424242", 
  boxShadowColor: "#151414"
}

const dark = createTheme(adaptV4Theme({  
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
    selectedMenuItem: 'red', 
    hamburgerColor: 'red',
    contactHeaderColor: 'black'
  }
}));

export default dark;