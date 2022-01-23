import React from 'react';
import { Box, Button, Dialog, DialogTitle, TextField } from '@mui/material';
import PropTypes from 'prop-types';

const MasterPasswordDialog = ({ open, onClose }) => {
  const handleClickawayClose = () => {
    onClose('')
  }

  const handleClose = (e) => {
    e.preventDefault()
    const masterPassword = e.target.elements.masterPassword.value
    onClose(masterPassword);
  };

  return (
    <Dialog onClose={handleClickawayClose} open={open}>
      <DialogTitle>Enter master password</DialogTitle>
      <Box component={"form"}
           sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, p: 7 }}
           onSubmit={handleClose}>
        <TextField name={"masterPassword"} autoComplete={"current-password"}
                   label={"Master password"} type={"password"}/>
        <Button variant={"contained"} type={"submit"}>Submit</Button>
      </Box>
    </Dialog>
  );
};

MasterPasswordDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MasterPasswordDialog;