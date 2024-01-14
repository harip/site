import React, {useState} from 'react';
import clsx from 'clsx';
import Button from '@mui/material/Button'; 
import CircularProgress from '@mui/material/CircularProgress';
import makeStyles from '@mui/styles/makeStyles'; 
import { green } from '@mui/material/colors'; 

const useStyles= makeStyles((theme)=>({
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
}));

const SpinnerButton = ( {buttonProps} ) => {
  const { text, onClick, loading } = buttonProps; 
  const [success, setSuccess] = useState(false);
  const classes = useStyles(); 
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const onButtonClick = () => { 
    // Parent has the functionality of onclick
    onClick();
  }

  return (
    <div className={classes.wrapper}>
      <Button 
        color="primary" 
        variant="contained" 
        className={buttonClassname}
        disabled={loading}
        onClick={onButtonClick}>
        {text}
      </Button>
      {
        loading && 
        <CircularProgress size={24} className={classes.buttonProgress} />
      }
    </div>
  )
}

export  default SpinnerButton;