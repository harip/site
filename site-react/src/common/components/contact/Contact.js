import React from 'react';   
import { Dialog, ListItemText, makeStyles, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar'; 
import MailOutlineIcon from '@material-ui/icons/MailOutline'; 
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'; 
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton'; 
import { red } from '@material-ui/core/colors'; 
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import GitHubIcon from '@material-ui/icons/GitHub'; 
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  }, 
  square: { 
    backgroundColor: '#1976d2'
  },
  contactHeader: {
    fontSize: 20,
    // color: 'white',
    // backgroundColor: 'black'
    borderBottom: 2
  },
  actionsRoot: {
    // backgroundColor: 'aqua'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
}));

const Contact = (props) =>{  
  const { open, close } = props;
  const classes=useStyles();  

  const handleClose = () =>{
    close();
  }

  return( 
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}> 
      <MuiDialogTitle disableTypography className={classes.contactHeader} >
      <Typography variant="h6">HARI PULUGURTA</Typography>
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose} >
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <Card className={classes.root}>   
      <CardContent>
 
      <List>
        <ListItem  >
          <ListItemAvatar>
            <Avatar variant="square" className={classes.square}>
              <MailOutlineIcon  />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="charanp@gmail.com" />
        </ListItem>

        <ListItem  >
          <ListItemAvatar>
            <Avatar variant="square" className={classes.square}>
              <PhoneIphoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="419-450-1795" />
        </ListItem>
      </List>

      </CardContent>
      <CardActions disableSpacing className={classes.actionsRoot}>
        <IconButton aria-label="share" target="_blank"  href="https://github.com/harip" rel="noopener">
          <GitHubIcon />
        </IconButton> 
        <IconButton aria-label="share" target="_blank"  href="https://github.com/harip/Resume/blob/master/format1/HARI_Resume.pdf" rel="noopener">
          <PictureAsPdfIcon />
        </IconButton>              
      </CardActions>
    </Card>

    </Dialog>
  )
};

export default Contact;