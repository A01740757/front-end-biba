import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const EditarUsuario = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/usuarios/${id}`)
      .then(res => {
        setNombre(res.data.nombre);
        setEmail(res.data.email);
      })
      .catch(() => alert('Error al cargar usuario'));
  }, [id]);

  const handleActualizar = async () => {
    try {
      await axios.put(`http://localhost:3000/api/usuarios/${id}`, { nombre, email });
      alert('Usuario actualizado');
      navigate('/usuarios');
    } catch (err) {
      alert('Error al actualizar');
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h5">Editar Usuario</Typography>
      <TextField label="Nombre" fullWidth margin="normal" value={nombre} onChange={e => setNombre(e.target.value)} />
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
      <Button variant="contained" onClick={handleActualizar} sx={{ mt: 2 }}>Actualizar</Button>
    </Box>
  );
};

export default EditarUsuario;