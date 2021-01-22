
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { Tab } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs'; 
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FindInPage from '@material-ui/icons/FindInPage';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
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

    if (value === 2) {
      history.push('/resume');
      return;
    }

    if (value === 3) {
      history.push('/projects');
      return;
    }

    return (
      <div>Coming soon!</div>
    );
  };
 
  return ( 
    <Paper square>
      <Contact open={openContact} close={handleContactClose}/> 
      
        <Tabs 
          value={0}
          indicatorColor="primary"  
        >
          <Tab icon={<ContactMailIcon style={{ fontSize: 40 }}/>} className={classes.initials} label="HARI" onClick={(e)=>handleChange(e,0)}/> 

          <Hidden xsDown> 
            <Tab icon={<FindInPage />} onClick={(e)=>handleChange(e,1)} label="Skill Cloud"/>
            <Tab icon={<AssignmentInd />} onClick={(e)=>handleChange(e,2)} label="Resume"/> 
            <Tab icon={<DynamicFeedIcon />} onClick={(e)=>handleChange(e,3)} label="Projects"/>  
          </Hidden>

          <Hidden smUp>    
            <IconButton className={classes.mobileMenuLoc} onClick={()=>settoggleMenu(!toggleMenu)} color="primary" >
              <MenuIcon  className={classes.mobileMenu}/>
            </IconButton> 
            <SwipeableTemporaryDrawer toggle={toggleMenu} setToggle={settoggleMenu} onHandleChange={handleChange}/>
          </Hidden>           

        </Tabs>   
        

    </Paper>
  );
}

export default NavBar;