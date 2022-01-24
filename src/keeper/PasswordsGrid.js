import React, { useEffect } from 'react';
import { Paper } from '@mui/material';
import PasswordPaper from './PasswordPaper';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllPasswordEntities,
  selectPasswordEntity
} from '../app/redux/passwordEntity/passwordEntitySlice';

const PasswordsGrid = () => {
  const dispatch = useDispatch()
  const passwordEntityData = useSelector(selectPasswordEntity)
  const passwordEntities = passwordEntityData.data


  useEffect(() => {
    dispatch(fetchAllPasswordEntities())
  }, [dispatch])

  return (
    <Paper sx={{
      mt: 3,
      p: 5,
      width: "auto",
      display: 'flex',
      gap: 5,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      {passwordEntities.map(entity => (
        <PasswordPaper key={entity.id} passwordEntity={entity}/>
      ))}
    </Paper>
  );
};

export default PasswordsGrid;