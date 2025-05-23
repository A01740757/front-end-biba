import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch {
      alert('Credenciales inválidas');
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
      <Typography variant="h4" gutterBottom>Iniciar sesión</Typography>
      <TextField label="Correo" value={email} onChange={e => setEmail(e.target.value)} margin="normal" />
      <TextField label="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} margin="normal" />
      <Button variant="contained" onClick={handleLogin}>Ingresar</Button>
    </Box>
  );
};

export default Login;