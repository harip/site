import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ErrorDialog = (props) => { 
  const { errorDialogData, closeError, openError } = props.errorDialog; 

  const handleClose = () => {
    closeError();
  };

  if (!errorDialogData || errorDialogData === {} || !openError){
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
 