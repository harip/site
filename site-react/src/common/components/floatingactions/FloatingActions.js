import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'; 
import Hidden from '@material-ui/core/Hidden'; 
import FeedbackIcon from '@material-ui/icons/Feedback';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import getResume from './resume-service';
import onFeedbackSubmit from './feedback-service';
import Feedback from './Feedback';
import ErrorDialog from '../errordialog/ErrorDialog';
import Switch from '@material-ui/core/Switch';
import UserContext from '../../../context/UserContext';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1), 
  },

  fabFeedback: {
    marginTop: 10,
    position: 'fixed',  
    bottom: theme.spacing(2),
    zIndex: 999
  },

  fabResume: {
    marginTop: 10,
    position: 'fixed',    
    bottom: theme.spacing(8),
    zIndex: 999
  },

  fabItem: {
    marginBottom: 10
  },

  fabTheme: { 
    position: 'fixed',    
    right: theme.spacing(2),
    bottom: theme.spacing(2),
    marginLeft: 'auto' 
  },
}));

const FloatingActions = () => {
  const classes = useStyles();
  const userContext = useContext(UserContext);
  const [errorDialog, setErrorDialog] = useState({}); 
  const [toggleFeedbackForm, settoggleFeedbackForm] = useState(false); 

  /**
   * Get resume and display in a tab
   */
  const showResume = async () => { 
    const success = await getResume(); 
    if (!success) {
      // Getting resume failed - display dialog 
      openErrorDialogWindow({
        description: "Please retry again or visit the Resume tab on the top of the page.",
        title: "Failed to retrieve Resume."
      }); 
    }
  }

  /**
   * Show a feedback form for user
   */
  const feedbackForm = async () => {
    settoggleFeedbackForm(!toggleFeedbackForm);
  }
  
  /**
   * Close feedback form, save or not save is indicated by save parameter
   * @param {*} save save or cancel feedback form
   * @param {*} data feedback form data
   */
  const closeFeedbackForm = async (save,data) => {
    if (!save){
      settoggleFeedbackForm(false);
      return;
    }

    // Save data  
    settoggleFeedbackForm(false);

    if (!data || data.comments === ''){
      return;
    }
    await onFeedbackSubmit(data);
  }

  /**
   * Show error dialog
   * @param {*} errorData error data
   */
  const openErrorDialogWindow = (errorData) =>{
    const dialogData = {
      openError: true,
      errorDialogData: errorData,
      closeError: closeErrorDialogWindow
    } 
    setErrorDialog(dialogData);
  }

  /**
   * Close error dialog 
   */
  const closeErrorDialogWindow = () =>{ 
    setErrorDialog({});
  }  

  const setTheme = (e) => { 
    userContext.changeTheme(e.target.checked ? 'dark': 'light');
  } 

  return (
    <React.Fragment>
          <ErrorDialog 
            errorDialog= {errorDialog}/>

          <Feedback 
            open={toggleFeedbackForm} 
            close = {closeFeedbackForm} />

          {/* Not mobile  */}
          <Hidden xsDown > 
            <div className={classes.fabResume}> 
              <div className={classes.fabItem}>
                <Fab
                  variant="extended"
                  size="small"
                  color="primary"
                  aria-label="add" 
                  onClick = { ()=> showResume() }
                >
                  <CloudDownloadIcon className={classes.extendedIcon} />
                  Resume
                </Fab> 
              </div> 
            </div> 

            <div className={classes.fabFeedback}> 
              <div className={classes.fabItem}>
                <Fab
                  variant="extended"
                  size="small"
                  color="primary"
                  aria-label="add" 
                  onClick = { ()=> feedbackForm() }
                >
                  <FeedbackIcon  /> 
                </Fab> 
              </div> 
            </div>            
          </Hidden>

          {/* Mobile */}
          <Hidden smUp> 
            <div className={classes.fabResume}> 
              <div className={classes.fabItem}>
                <Fab
                  variant="extended"
                  size="small"
                  color="primary"
                  aria-label="add"  
                  onClick = { ()=> showResume() }
                >
                  <PictureAsPdfIcon /> 
                </Fab> 
              </div> 
            </div> 

            <div className={classes.fabFeedback}> 
              <div className={classes.fabItem}>
                <Fab
                  variant="extended"
                  size="small"
                  color="primary"
                  aria-label="add" 
                  onClick = { ()=> feedbackForm() }
                >
                  <FeedbackIcon /> 
                </Fab> 
              </div> 
            </div>            
          </Hidden>  

          <div className={classes.fabTheme}>          
            <Switch 
              color="primary" 
              checked = {userContext.theme === 'dark'} 
              onChange= {setTheme}  />
            Dark(beta)
          </div>


    </React.Fragment>
  );
}

export default FloatingActions;