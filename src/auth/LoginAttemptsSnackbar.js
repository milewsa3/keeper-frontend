import React, { useEffect, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { maxLoginAttempts } from './AuthUtils';
import { loginAttemptsExceeded } from '../redux/auth/authSlice';

const LoginAttemptsSnackbar = () => {
  const dispatch = useDispatch()
  const loginAttempts = useSelector(state => state.auth.failedLoginAttempts)
  const [severity, setSeverity] = useState('warning')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (loginAttempts === maxLoginAttempts) {
      setSeverity('error')
      dispatch(loginAttemptsExceeded())
    } else if (loginAttempts === 0) {
      setSeverity('info')
    } else if (loginAttempts > 0 && loginAttempts < maxLoginAttempts) {
      setSeverity('warning')
    }

    setOpen(true)
  }, [loginAttempts, dispatch])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        You have {maxLoginAttempts - loginAttempts} login attempts
        {loginAttempts === maxLoginAttempts && '. Wait for a while until again you can try to log in'}
      </Alert>
    </Snackbar>
  );
};

export default LoginAttemptsSnackbar;