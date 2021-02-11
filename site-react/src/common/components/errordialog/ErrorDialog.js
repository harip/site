import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ErrorDialog = (props) => { 
  const { errorDialogData, closeError, openError } = props.errorDialog; 

  const handleClose = () => {
    closeError();
  };

  if (!errorDialogData || errorDialogData === {} || openError === false){
    return null;
  }

  return (
    <div>
      <Dialog
        open={openError}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{errorDialogData.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {errorDialogData.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ErrorDialog;
 