import React from 'react';   
import { Button, Dialog, makeStyles, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'; 
import MailOutlineIcon from '@material-ui/icons/MailOutline'; 
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent'; 
import IconButton from '@material-ui/core/IconButton'; 
import { red } from '@material-ui/core/colors'; 
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import GitHubIcon from '@material-ui/icons/GitHub'; 
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
    borderBottom: 2,
    backgroundColor: 'antiquewhite'
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
  label: {
    // Aligns the content of the button vertically.
    flexDirection: 'column'
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
            <Button
            variant="contained"
            color="primary"
            size="large" 
            className={classes.button}
            onClick={()=>window.location.href = 'mailto:charanp@gmail.com' }
            startIcon={<MailOutlineIcon />}
          >
            charanp@gmail.com
          </Button>
        </ListItem>  

        <ListItem  > 
          <Button
            variant="contained"
            color="primary"
            size="large" 
            className={classes.button}
            startIcon={<PhoneIphoneIcon />}
          >
            419-450-1795
          </Button>
        </ListItem>        

        <ListItem  > 
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={()=> window.open('https://github.com/harip/Resume/blob/master/format1/HARI_Resume.pdf?raw=true', '_blank') }
            className={classes.button}
            startIcon={<PictureAsPdfIcon />}
          >
            Resume
          </Button> 
        </ListItem>

        <ListItem  > 
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={()=> window.open('https://github.com/harip') }
            className={classes.button}
            startIcon={<GitHubIcon />}
          >
            Github/Projects
          </Button>
        </ListItem>     

        <ListItem  > 
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={()=> window.open('https://www.linkedin.com/in/charanp') }
            className={classes.button}
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </Button>
        </ListItem>             
      </List>

      </CardContent>
    </Card>

    </Dialog>
  )
};

export default Contact;