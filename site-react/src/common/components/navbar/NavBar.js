
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'; 
import { Tab, Typography } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs'; 
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FindInPage from '@material-ui/icons/FindInPage';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed'; 
import { makeStyles } from '@material-ui/core/styles';  
import Contact from '../contact/Contact';
import Hidden from '@material-ui/core/Hidden'; 
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';  
import SubjectIcon from '@material-ui/icons/Subject';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SignIn from '../../../signin/SignIn';
import UserContext from '../../../context/UserContext';

const useStyles = makeStyles({
  initials: {
    fontSize: 15
  },
  mobileMenuLoc: {
    marginLeft: 'auto'
  },
  mobileMenu: {
    fontSize: 45
  },
  selectedTab: {
    borderBottom: '7px solid blue'
  },
  mobileDisplayMenu : {
    margin: 'auto',
  }
});

const NavBar = (props) => {
  const userContextValue = useContext(UserContext);
  const [openContact, setopenContact] = useState(false);
  const history = useHistory();
  const classes = useStyles();  
  const [toggleMenu, settoggleMenu] = useState(false);
  const [selTab, setSelTab] = useState(1);
  const [showSignIn, setShowSignIn] = useState(false);
  
  const handleContactClose = () => {
    setopenContact(false);
  };

  const handleSignInClose = () => {
    setShowSignIn(false);
  };

  const menuText = () => {
    if (selTab === 1) {
      return 'Skills';
    }
    if (selTab === 2) {
      return 'Resume';
    }
    if (selTab === 3) {
      return 'Projects';
    }
    if (selTab === 4) {
      return 'Blog';
    }
    if (selTab === 5) {
      return 'Edit Blog';
    } 
    return ''
  }

  const handleChange = (event,value) => { 
    setSelTab(value);
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

    if (value === 4) {
      history.push('/posts');
      return;
    }

    if (value === 5) {
      // Login screen
      history.push('/editposts');
      return;
    }

    if (value === 998) {
      // Login screen
      setShowSignIn(true);
      return;
    }

    if (value === 999) {
      // hide screen
      userContextValue.logout();
      return;
    }

    return (
      <div>Coming soon!</div>
    );
  };
 
  return ( 
    <div>
      <Contact open={openContact} close={handleContactClose}/> 
      <SignIn open={showSignIn} close={handleSignInClose}/>
      
        <Tabs 
          value={0}
          inkbarstyle={{background: 'blue'}}
          indicatorColor="primary"  
        >
          <Tab icon={<ContactMailIcon style={{ fontSize: 40 }}/>} className={classes.initials} label="HARI" onClick={(e)=>handleChange(e,0)}/> 

          <Hidden only={['xs','sm']}> 
            <Tab 
              icon={<FindInPage />} 
              onClick={(e)=>handleChange(e,1)} 
              label="Skill Cloud"
              className={`${ selTab===1 ? classes.selectedTab : ""}`}
            />

            <Tab 
              icon={<AssignmentInd />} 
              onClick={(e)=>handleChange(e,2)} 
              label="Resume"
              className={`${ selTab===2 ? classes.selectedTab : ""}`}
            /> 

            <Tab 
              icon={<DynamicFeedIcon />} 
              onClick={(e)=>handleChange(e,3)} 
              label="Projects"
              className={`${ selTab===3 ? classes.selectedTab : ""}`}
            />  

            <Tab 
              icon={<SubjectIcon />} 
              onClick={(e)=>handleChange(e,4)} 
              label="Blog"
              className={`${ selTab===4 ? classes.selectedTab : ""}`}
            />     
            {
              !userContextValue.isLoggedIn()
              ? 
                <Tab 
                  icon={<AccountCircleIcon />} 
                  onClick={(e)=>handleChange(e,998)}  
                  style={{marginLeft: 'auto'}}
                  className={`${ selTab===998 ? classes.selectedTab : ""}`}
                />  
              :
                <Tab 
                  icon={<ExitToAppIcon />} 
                  onClick={(e)=>handleChange(e,999)}  
                  style={{marginLeft: 'auto'}}
                  className={`${ selTab===999 ? classes.selectedTab : ""}`}
                />  
            } 
          </Hidden>

          <Hidden only={['md','lg','xl']}>    
            <div className={classes.mobileDisplayMenu}>
              <Typography variant="h6">{menuText()}</Typography>
            </div>
            <IconButton className={classes.mobileMenuLoc} onClick={()=>settoggleMenu(!toggleMenu)} color="primary" >
              <MenuIcon  className={classes.mobileMenu}/>
            </IconButton> 
            <SwipeableTemporaryDrawer toggle={toggleMenu} setToggle={settoggleMenu} onHandleChange={handleChange}/>
          </Hidden>           

        </Tabs>   
        

    </div>
  );
}

export default NavBar;