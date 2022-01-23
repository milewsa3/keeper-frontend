import React from 'react';
import PasswordsGrid from './PasswordsGrid';
import { Container } from '@mui/material';
import AddPassword from './AddPassword';

const Dashboard = () => {
  return (
    <Container sx={{ my: 8 }}>
      <AddPassword/>
      <PasswordsGrid/>
    </Container>
  );
};

export default Dashboard;