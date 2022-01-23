import React from 'react';
import { Alert, Snackbar } from '@mui/material';

const WrongMasterPasswordSnackbar = ({ open, setOpen }) => {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={'error'} sx={{ width: '100%' }}>
        Wrong master password
      </Alert>
    </Snackbar>
  );
};

export default WrongMasterPasswordSnackbar;