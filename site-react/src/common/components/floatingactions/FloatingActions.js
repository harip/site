import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import NavigationIcon from '@material-ui/icons/Navigation';
import Hidden from '@material-ui/core/Hidden'; 
import FeedbackIcon from '@material-ui/icons/Feedback';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import getResume from '../../../apis/endpoints';
import onFeedbackSubmit from './feedback-service';

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

  const showResume = async () => {
     await getResume(); 
  }

  const feedback = async () => {
    const response = await onFeedbackSubmit();
    console.log(response);
  }

  return (
    <React.Fragment>

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
                  onClick = { ()=> feedback() }
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
                  onClick = { ()=> feedback() }
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