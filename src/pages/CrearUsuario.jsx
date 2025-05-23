import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CrearUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCrear = async () => {
    try {
      await axios.post('http://localhost:3000/api/usuarios', { nombre, email, password });
      alert('Usuario creado');
      navigate('/usuarios');
    } catch (err) {
      alert('Error al crear usuario');
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h5">Crear Usuario</Typography>
      <TextField label="Nombre" fullWidth margin="normal" value={nombre} onChange={e => setNombre(e.target.value)} />
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
      <TextField label="Contraseña" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
      <Button variant="contained" onClick={handleCrear} sx={{ mt: 2 }}>Guardar</Button>
    </Box>
  );
};

export default CrearUsuario;