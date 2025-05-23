import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Usuarios = () => {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Typography variant="h5">Gestión de Usuarios</Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/usuarios/crear')}>
        Crear nuevo usuario
      </Button>
    </Box>
  );
};

export default Usuarios;