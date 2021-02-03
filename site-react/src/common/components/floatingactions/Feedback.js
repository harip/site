import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Feedback =  (props) => {
  const { open, close} = props;
 
  const handleClose = (save) => {
    const data = {
      rating: '4222',
      comments: 'sdfsdfsdfsdfsd'
    };
    close(save,data);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thoughts?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide any thoughts or tips related to my resume or skills or site design.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="comments"
            label="thoughts?"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>handleClose(true)} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Feedback;