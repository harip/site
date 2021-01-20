
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { Button, Tab } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import FindInPage from '@material-ui/icons/FindInPage';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';  
import Contact from '../contact/Contact';
import Hidden from '@material-ui/core/Hidden'; 
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  initials: {
    fontSize: 15,
    background: 'black' ,
    color: 'white'
  },
  mobileMenuLoc: {
    marginLeft: 'auto'
  },
  mobileMenu: {
    fontSize: 45
  },
});

const NavBar = (props) => {
  const [openContact, setopenContact] = useState(false);
  const history = useHistory();
  const classes = useStyles();  
  const [toggleMenu, settoggleMenu] = useState(false)  
  
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

        <Hidden xsDown> 
          <Tab icon={<FindInPage />} label="Skill Cloud"/>
          <Tab icon={<AssignmentInd />} label="Resume"/> 
          <Tab icon={<AssignmentInd />} label="Projects"/> 
        </Hidden> 

        <Hidden smUp>   

          <IconButton className={classes.mobileMenuLoc} onClick={()=>settoggleMenu(!toggleMenu)} color="primary" >
            <MenuIcon  className={classes.mobileMenu}/>
          </IconButton>

          <SwipeableTemporaryDrawer toggle={toggleMenu} setToggle={settoggleMenu}/>
        </Hidden>
      </Tabs>  
      </Paper>
  );
}

export default NavBar;