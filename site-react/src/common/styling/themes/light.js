import { createTheme, adaptV4Theme } from '@mui/material/styles';

const light = createTheme(adaptV4Theme({  
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
}));

export default light;