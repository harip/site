
import { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { Tab } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import FindInPage from '@material-ui/icons/FindInPage';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'; 
import Contact from '../contact/Contact';

const useStyles = makeStyles({
  initials: {
    fontSize: 15,
    background: 'black' ,
    color: 'white'
  },
});

const NavBar = (props) => {
  const [openContact, setopenContact] = useState(false);
  const history = useHistory();
  const classes = useStyles(); 
  
  const handleContactClose = () => {
    setopenContact(false);
  };

  const handleChange = (event,value) => { 
    if (value === 0) {
      setopenContact(true); 
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
      <Contact open={openContact} close={handleContactClose}/>

      <Tabs 
        value={0}
        indicatorColor="primary" 
        onChange={handleChange}
      >
        <Tab icon={<ContactMailIcon style={{ fontSize: 40 }}/>} className={classes.initials} label="HARI" />
        <Tab icon={<FindInPage />} label="Skill Cloud"/>
        <Tab icon={<AssignmentInd />} label="Resume"/> 
      </Tabs>  
      </Paper>
  );
}

export default NavBar;