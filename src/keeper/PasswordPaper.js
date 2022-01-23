import React, { useState } from 'react';
import { Button, Link, Paper, Typography } from '@mui/material';
import MasterPasswordDialog from './MasterPasswordDialog';
import WrongMasterPasswordSnackbar from './error/WrongMasterPasswordSnackbar';
import { getDecryptedPasswordEntityForUser } from '../app/api';

const PasswordPaper = ({ passwordEntity, ...props }) => {
  const [passwordHidden, setPasswordHidden] = useState(true)
  const [password, setPassword] = useState('**********')
  const [wrongMasterPassword, setWrongMasterPassword] = useState(false)
  const [openDialog, setOpenDialog] = useState(false);

  const handleButtonClick = () => {
    if (passwordHidden) {
      setOpenDialog(true)
    } else {
      setPassword('**********')
      setPasswordHidden(true)
    }
  }

  const handleCloseDialog = (value) => {
    setOpenDialog(false);
    if (value === '') {
      return
    }

    getDecryptedPasswordEntityForUser(passwordEntity.id, value)
    .then(res => {
      const data = res.data
      setPassword(data.password)
      setPasswordHidden(false)
    })
    .catch(err => {
      if (err.response.data.error.masterPassword) {
        setWrongMasterPassword(true)
      }
    })
  };

  return (
    <div>
      <Paper
        elevation={4}
        sx={{
          px: 5,
          py: 5,
          display: "flex",
          flexDirection: { xs: "column" },
          gap: 2,
          alignItems: "center",
        }}
      >
        <Typography variant={"subtitle1"}>Page URL: <b><Link href={passwordEntity.pageUrl}
                                                             target="_blank" rel="noopener"
                                                             underline="hover"
                                                             color={"text.primary"}>{passwordEntity.pageUrl}</Link></b></Typography>
        <Typography variant={"subtitle1"}>Password: <b>{password}</b></Typography>
        <Button variant={"contained"}
                onClick={handleButtonClick}>{passwordHidden ? 'Show' : 'Hide'}</Button>
      </Paper>
      <MasterPasswordDialog open={openDialog} onClose={handleCloseDialog}/>
      <WrongMasterPasswordSnackbar open={wrongMasterPassword} setOpen={setWrongMasterPassword}/>
    </div>
  );
};

export default PasswordPaper;