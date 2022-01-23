import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import PasswordPaper from './PasswordPaper';
import { getAllPasswordEntitiesForUser } from '../app/api';

const PasswordsGrid = () => {
  const [passwordEntities, setPasswordEntities] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getAllPasswordEntitiesForUser()
        setPasswordEntities(data)
      }
      catch (err) {
        setPasswordEntities([])
      }
    }

    fetchData()
  }, [])

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