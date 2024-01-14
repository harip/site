import React, { useState,useContext } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import MuiDialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import CloseIcon from '@mui/icons-material/Close';
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
  const classes = useStyles();  

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
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleClose}
              size="large">
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
                      size="large">
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