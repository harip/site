import React from 'react';
import { Button, Dialog, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CloseIcon from '@mui/icons-material/Close';
import MuiDialogTitle from '@mui/material/DialogTitle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
    backgroundColor: theme.palette.contactHeaderColor
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
 

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}> 
      <MuiDialogTitle disableTypography className={classes.contactHeader} >
      <Typography variant="h6">HARI PULUGURTA</Typography>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
          size="large">
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
  );
};

export default Contact;