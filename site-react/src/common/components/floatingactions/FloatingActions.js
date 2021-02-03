import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'; 
import Hidden from '@material-ui/core/Hidden'; 
import FeedbackIcon from '@material-ui/icons/Feedback';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import getResume from '../../../apis/endpoints';
import onFeedbackSubmit from './feedback-service';
import Feedback from './Feedback';

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
  },

  fabResume: {
    marginTop: 10,
    position: 'fixed',   
  },

  fabItem: {
    marginBottom: 10
  }
}));

const FloatingActions = () => {
  const classes = useStyles();
  const [toggleFeedbackForm, settoggleFeedbackForm] = useState(false)

  const showResume = async () => {
     await getResume(); 
  }

  const feedbackForm = async () => {
    settoggleFeedbackForm(!toggleFeedbackForm);
  }

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

  return (
    <React.Fragment>
          <Feedback open={toggleFeedbackForm} close = {closeFeedbackForm} />

          {/* Not mobile  */}
          <Hidden xsDown> 
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



 
    </React.Fragment>
  );
}

export default FloatingActions;