import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'; 
import List from '@material-ui/core/List'; 
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail'; 
import { Typography } from '@material-ui/core'; 
import MuiDialogTitle from '@material-ui/core/DialogTitle';

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
        {['Skill Cloud', 'Resume', 'Projects'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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