import React, { useEffect, useState } from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  createPasswordEntity,
  selectPasswordEntity
} from '../app/redux/passwordEntity/passwordEntitySlice';

const initialState = {
  pageUrl: '',
  password: '',
  masterPassword: ''
}

const AddPassword = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch()
  const passwordEntityData = useSelector(selectPasswordEntity)
  const error = passwordEntityData.error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPasswordEntity(formData))
  }

  useEffect(() => {
    setFormData(initialState)
  }, [passwordEntityData.data])

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