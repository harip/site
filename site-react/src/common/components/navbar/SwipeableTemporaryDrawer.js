import React from 'react'; 
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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  contactHeader: { 
    fontSize: 20,
    borderBottom: 2,
    color: '#fff',
    backgroundColor: '#3f51b5'
  }
});

const  SwipeableTemporaryDrawer =(props)=> {
  const classes = useStyles();
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
        <ListItem button key={'Skill Cloud'} onClick={()=>props.onHandleChange(null,1)}>
          <ListItemIcon><FindInPage /></ListItemIcon>
          <ListItemText primary="Skill Cloud" />
        </ListItem>

        <ListItem button key={'Resume'} onClick={()=>props.onHandleChange(null,2)}>
        <ListItemIcon><AssignmentInd /></ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>

        <ListItem button key={'Projects'} onClick={()=>props.onHandleChange(null,3)}>
          <ListItemIcon> <DynamicFeedIcon /> </ListItemIcon>
          <ListItemText primary="Projects" />
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