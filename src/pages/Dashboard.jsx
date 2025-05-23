import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Box p={4}>
      <Typography variant="h4">Bienvenido a VIBA</Typography>
      <Button onClick={logout} variant="outlined" sx={{ mt: 2 }}>Cerrar sesión</Button>
    </Box>
  );
};

export default Dashboard;