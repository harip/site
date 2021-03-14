import { createMuiTheme } from '@material-ui/core/styles';

const light = createMuiTheme({  
  overrides: {
    MuiCssBaseline: {
      "@global": {
        pre: { 
          backgroundColor: "antiquewhite", 
        }
      }
    },

    MuiGridList : {
      backgroundColor: '#fafafa'
    }
  }, 

  palette: { 
    type: 'light',  
    selectedMenuItem: 'red',
    hamburgerColor: '#3f51b5',
    contactHeaderColor: 'antiquewhite'
  },
});

export default light;