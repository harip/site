
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'; 
import { Tab, ThemeProvider, StyledEngineProvider, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs'; 
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FindInPage from '@mui/icons-material/FindInPage';
import AssignmentInd from '@mui/icons-material/AssignmentInd';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'; 
import makeStyles from '@mui/styles/makeStyles';  
import Contact from '../contact/Contact';
import Hidden from '@mui/material/Hidden'; 
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';  
import SubjectIcon from '@mui/icons-material/Subject';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SignIn from '../../../signin/SignIn';
import UserContext from '../../../context/UserContext';

const useStyles = makeStyles((theme)=>  ({
  initials: {
    fontSize: 15
  },
  mobileMenuLoc: {
    marginLeft: 'auto',
    color: theme.palette.hamburgerColor
  },
  mobileMenu: {
    fontSize: 45
  },
  selectedTab: {
    borderBottom: '7px solid blue'
  },
  mobileDisplayMenu : {
    margin: 'auto'
  }
}));

const NavBar = (props) => {
  const userContextValue = useContext(UserContext);
  const [openContact, setopenContact] = useState(false);
  const history = useHistory();
  const classes = useStyles();  
  const [toggleMenu, settoggleMenu] = useState(false);
  const [selTab, setSelTab] = useState(0);
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
          </Hidden>

          <Hidden only={['md','lg','xl']}>    
            <div className={classes.mobileDisplayMenu}>
              <Typography variant="h6">{menuText()}</Typography>
            </div>
            <IconButton
              className={classes.mobileMenuLoc}
              onClick={()=>settoggleMenu(!toggleMenu)}
              size="large">
              <MenuIcon  className={classes.mobileMenu}/>
            </IconButton> 
            <SwipeableTemporaryDrawer toggle={toggleMenu} setToggle={settoggleMenu} onHandleChange={handleChange}/>
          </Hidden>           

        </Tabs>   
        
        <hr/>
    </div>
  );
}

export default NavBar;