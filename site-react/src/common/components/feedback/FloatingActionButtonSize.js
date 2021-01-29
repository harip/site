import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import NavigationIcon from '@material-ui/icons/Navigation';
import Hidden from '@material-ui/core/Hidden'; 
import FeedbackIcon from '@material-ui/icons/Feedback';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import getResume from '../../../apis/endpoints';

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

export default function FloatingActionButtonSize() {
  const classes = useStyles();

  const showResume = async () => {
     await getResume();
    
    // if (window.navigator.msSaveOrOpenBlob) {
    //   // IE11
    //   window.navigator.msSaveOrOpenBlob(resume, `hari.pdf`);
    // } else {
    //   window.open(URL.createObjectURL(resume), '_blank');
    // }

    // debugger
  }

  return (
    <React.Fragment>

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
                >
                  <FeedbackIcon /> 
                </Fab> 
              </div> 
            </div>            
          </Hidden>

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
                >
                  <FeedbackIcon /> 
                </Fab> 
              </div> 
            </div>            
          </Hidden>



 
    </React.Fragment>
  );
}
