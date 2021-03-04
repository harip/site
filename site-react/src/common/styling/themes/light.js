import { createMuiTheme } from '@material-ui/core/styles';

const light = createMuiTheme({  
  overrides: {
    MuiGridList : {
      backgroundColor: '#fafafa'
    }
  }, 

  palette: { 
    type: 'light',  
  },
});

export default light;