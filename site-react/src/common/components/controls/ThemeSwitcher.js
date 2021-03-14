import { makeStyles } from '@material-ui/core';
import Switch from '@material-ui/core/Switch'; 
import { useContext } from 'react';
import UserContext from '../../../context/UserContext';

const useStyles = makeStyles((theme) => ({
  fabTheme: { 
    position: 'fixed',    
    right: theme.spacing(2),
    bottom: theme.spacing(2),
    marginLeft: 'auto' 
  }
}));

const ThemeSwitcher = () => {
  const userContext = useContext(UserContext);
  const classes = useStyles();

  const setTheme = (e) => { 
    userContext.changeTheme(e.target.checked ? 'dark': 'light');
  } 

  return(
    <div className={classes.fabTheme}>
      <Switch 
        color="primary"
        checked = {userContext.theme === 'dark'} 
        onChange= {setTheme}
      />
      Dark(beta)
    </div>
  )
}

export default ThemeSwitcher;