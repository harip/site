import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Feedback =  (props) => {
  const { open, close} = props;
  const [comment, setComment] = useState('');
 
  const handleClose = (save) => {
    const data = { 
      rating: '',
      comments: comment
    };
    close(save,data);
    setComment("");
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  }

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
            value={comment}
            onChange={handleChange}
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