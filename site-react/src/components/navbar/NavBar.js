
import { useHistory } from 'react-router-dom'; 

import { Tab } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import FindInPage from '@material-ui/icons/FindInPage'
import AssignmentInd from '@material-ui/icons/AssignmentInd'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles({
  initials: {
    fontSize: 40,
    background: 'black' ,
    color: 'white'
  },
});

const NavBar = (props) => {
  const history = useHistory();
  const classes = useStyles(); 
  
  const handleChange = (event,value) => { 
    if (value === 0) {
      return;
    }
    if (value === 1) {
      history.push('/');
      return;
    }
    history.push('/resume');
  };

  return ( 
    <Paper square>
      <Tabs 
        value={0}
        indicatorColor="primary" 
        onChange={handleChange}
      >
        <Tab  className={classes.initials} label="HP"> 
        </Tab>
        <Tab icon={<FindInPage />} label="Skill Cloud"/>
        <Tab icon={<AssignmentInd />} label="Resume"/>
      </Tabs>  
      </Paper>
  );
}

export default NavBar;