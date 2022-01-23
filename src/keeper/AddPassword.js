import React, { useState } from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { addPasswordEntityForUser } from '../app/api';

const initialState = {
  pageUrl: '',
  password: '',
  masterPassword: ''
}

const AddPassword = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(initialState)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    addPasswordEntityForUser(formData)
    .then(() => {
      setFormData(initialState)
      setError(initialState)
    })
    .catch(err => setError(err.response.data.error))
  }

  return (
    <Paper component={"form"} onSubmit={handleSubmit}
           sx={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', p: 6 }}>
      <Typography variant={"h5"} color={"text.primary"}>Add password</Typography>
      <TextField name={"pageUrl"} helperText={error.pageUrl} error={Boolean(error.pageUrl)}
                 label={"Page URL"} type={"text"} autoComplete="new-password" required
                 onChange={handleChange} value={formData.pageUrl}/>
      <TextField name={"password"} helperText={error.password} error={Boolean(error.password)}
                 label={"Password"} type={"password"} autoComplete="new-password" required
                 onChange={handleChange} value={formData.password}/>
      <TextField name={"masterPassword"} helperText={error.masterPassword}
                 error={Boolean(error.masterPassword)} label={"Master password"} type={"password"}
                 autoComplete="new-password" required onChange={handleChange}
                 value={formData.masterPassword}/>
      <Button variant={"contained"} type={"submit"}>Add</Button>
    </Paper>
  );
};

export default AddPassword;