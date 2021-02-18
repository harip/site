import React, { useState,useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent'; 
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input'; 
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles,Typography } from '@material-ui/core'; 

import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import ValidateCredentials from './SignInService';
import UserContext from '../context/UserContext';

import SpinnerButton from '../common/components/controls/SpinnerButton';

const useStyles= makeStyles((theme)=>({
    contactHeader: {
        fontSize: 20,
        borderBottom: 2,
        backgroundColor: '#ffa602'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
}));

const SignIn =  (props) => {
  const { open, close} = props; 
  const [email, setEmail] = useState('');
  const [passwordData, setPasswordData] = useState({
    password: '', 
    showPassword: false,
  }); 
  const userContextValue = useContext(UserContext);

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const classes = useStyles(); 
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const handleClose = () => {
      close();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => { 
    setPasswordData({ ...passwordData, password: e.target.value });
  }
  const handleClickShowPassword = () => {
    setPasswordData({ ...passwordData, showPassword: !passwordData.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSignIn = async () =>{
    setLoading(true);

    const authData = await ValidateCredentials({
        email,
        password: passwordData.password
    });

    const {token}=authData;
    if (token && token !== "null" && token !== "" ) {
      userContextValue.modifyNameAndToken('admin',token);

      // Set localstorage
      localStorage.setItem('token',token);
    } else {
      userContextValue.modifyNameAndToken('guest',token);
    } 

    // Close modal
    handleClose();
    setLoading(false);
  } 
     

  return (
    <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

        <MuiDialogTitle disableTypography className={classes.contactHeader} >
        <Typography variant="h6">Enable Admin Mode</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose} >
            <CloseIcon />
            </IconButton>
        </MuiDialogTitle>

        <DialogContent>

            <TextField
                id="standard-textarea"
                label="Enter email address"
                placeholder="email@address.com"
                value={email}
                onChange={handleEmailChange}
                multiline
            />
            <br/>
            <br/>

            <Input
                id="standard-adornment-password"
                type={passwordData.showPassword ? 'text' : 'password'}
                value={passwordData.password}
                onChange={handlePasswordChange}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                    {passwordData.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
            />

        </DialogContent>
        <DialogActions>
          <SpinnerButton buttonProps = {{
            'text': 'Sign In',
            'onClick':  onSignIn,
            'loading' : loading
            }} 
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignIn;