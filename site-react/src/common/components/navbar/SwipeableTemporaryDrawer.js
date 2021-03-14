import React, {useState,useContext} from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'; 
import List from '@material-ui/core/List'; 
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'; 
import { Typography } from '@material-ui/core'; 
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import FindInPage from '@material-ui/icons/FindInPage';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import SubjectIcon from '@material-ui/icons/Subject'; 
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; 
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import UserContext from '../../../context/UserContext'; 
import ThemeSwitcher from '../controls/ThemeSwitcher';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  contactHeader: { 
    fontSize: 20,
    borderBottom: 2,
    color: '#fff',
    backgroundColor: '#3f51b5'
  },
  selectedMenuItem: {
    backgroundColor: 'antiquewhite'
  }
});

const  SwipeableTemporaryDrawer =(props)=> {
  const userContextValue = useContext(UserContext);
  const [selMenu,setSelMenu]=useState(1);
  const classes = useStyles();

  const handleMenuClick = (menuIndex) => {
    setSelMenu(menuIndex);
    props.onHandleChange(null,menuIndex);
  }

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={()=>props.setToggle(false) }
      onKeyDown={()=>props.setToggle(false) }
    >

      <MuiDialogTitle disableTypography className={classes.contactHeader} color="primary" >
        <Typography variant="h6">HARI PULUGURTA</Typography>
      </MuiDialogTitle>

      <List>
        <ListItem button key={'Skill Cloud'} onClick={()=>handleMenuClick(1)} className={`${ selMenu===1 ? classes.selectedMenuItem : ""}`}>
          <ListItemIcon><FindInPage /></ListItemIcon>
          <ListItemText primary="Skill Cloud" />
        </ListItem>

        <ListItem button key={'Resume'} onClick={()=>handleMenuClick(2)} className={`${ selMenu===2 ? classes.selectedMenuItem : ""}`}>
        <ListItemIcon><AssignmentInd /></ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>

        <ListItem button key={'Projects'} onClick={()=>handleMenuClick(3)} className={`${ selMenu===3 ? classes.selectedMenuItem : ""}`}>
          <ListItemIcon> <DynamicFeedIcon /> </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>  

        <ListItem button key={'Blog'} onClick={()=>handleMenuClick(4)} className={`${ selMenu===4 ? classes.selectedMenuItem : ""}`}>
          <ListItemIcon> <SubjectIcon /> </ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItem>     
        {
          !userContextValue.isLoggedIn()
          ?
            <ListItem button key={'Sign In'} onClick={()=>handleMenuClick(998)} className={`${ selMenu===998 ? classes.selectedMenuItem : ""}`}>
              <ListItemIcon> <AccountCircleIcon /> </ListItemIcon>
              <ListItemText primary="Sign In" />
            </ListItem>  
          :
          <ListItem button key={'Sign Out'} onClick={()=>handleMenuClick(999)} className={`${ selMenu===999 ? classes.selectedMenuItem : ""}`}>
            <ListItemIcon> <ExitToAppIcon /> </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>  
        }  
        <ListItem>
          <ThemeSwitcher/>
        </ListItem> 
      </List>
    </div>
  );

  return ( 
    <SwipeableDrawer
      anchor='right'
      open={props.toggle}
      onClose={()=>props.setToggle(false) }
      onOpen={()=>props.setToggle(true) }
    >
    {list()}
  </SwipeableDrawer>     
  );
}

export default SwipeableTemporaryDrawer;