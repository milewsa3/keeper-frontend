import React from 'react';
import { Alert, Snackbar } from '@mui/material';

const PasswordAddedSnackbar = ({ open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={'success'} sx={{ width: '100%' }}>
        Password added!
      </Alert>
    </Snackbar>
  )
};

export default PasswordAddedSnackbar;