import React, { useState } from 'react';
import SpecialPromotions from "./SpecialPromotions";
import { Typography, Grid, Card, CardContent, TextField, Button, FormControl, FormLabel, Input, MenuItem, Select, Snackbar } from '@mui/material';
import { PeopleAlt, Hotel, Send } from '@mui/icons-material';
import { useData } from '../hooks/DataContext';
import { useSpring, animated } from 'react-spring';

function ContactForm() {
  const { reservationData } = useData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    checkIn: reservationData.checkIn || '',
    checkOut: reservationData.checkOut || '',
    adults: reservationData.adults || 1,
    kids: reservationData.kids || 0,
    rooms: reservationData.rooms || 1
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.checkIn || !formData.checkOut || !formData.adults) {
      setShowErrorMessage(true);
      return;
    }
    setShowSuccessMessage(true);
  };

  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 40, friction: 10, bounce: true }
  });

  return (
    <section id="contact-form" className="bg-gray-100 py-12">
      <animated.div style={{ ...formAnimation }} className="container mx-auto">
        <Typography variant="h2" align="center" gutterBottom>
          Reserva ahora
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Completa el formulario
                  </Typography>
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <TextField
                    label="Correo Electrónico"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <TextField
                    label="Mensaje (Opcional)"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  <FormControl style={{ margin: '0.8rem' }}>
                    <FormLabel htmlFor="check-in">Entrada</FormLabel>
                    <Input
                      id="check-in"
                      type="date"
                      size="small"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormControl style={{ margin: '0.8rem' }}>
                    <FormLabel htmlFor="check-out">Salida</FormLabel>
                    <Input
                      id="check-out"
                      type="date"
                      size="small"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormControl style={{ margin: '0.8rem' }}>
                    <FormLabel htmlFor="adults">Adultos</FormLabel>
                    <Select
                      id="adults"
                      size="small"
                      defaultValue={1}
                      name="adults"
                      value={formData.adults}
                      onChange={handleInputChange}
                      startAdornment={<PeopleAlt />}
                    >
                      {[...Array(8).keys()].map((num) => (
                        <MenuItem key={num + 1} value={num + 1}>
                          {num + 1} Adultos
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl style={{ margin: '0.8rem' }}>
                    <FormLabel htmlFor="kids">Niños</FormLabel>
                    <Select
                      id="kids"
                      size="small"
                      defaultValue={0}
                      name="kids"
                      value={formData.kids}
                      onChange={handleInputChange}
                      startAdornment={<PeopleAlt />}
                    >
                      {[...Array(8).keys()].map((num) => (
                        <MenuItem key={num} value={num}>
                          {num} Niños
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl style={{ margin: '0.8rem' }}>
                    <FormLabel htmlFor="rooms">Habitaciones</FormLabel>
                    <Select
                      id="rooms"
                      size="small"
                      defaultValue={1}
                      name="rooms"
                      value={formData.rooms}
                      onChange={handleInputChange}
                      startAdornment={<Hotel />}
                    >
                      {[...Array(8).keys()].map((num) => (
                        <MenuItem key={num + 1} value={num + 1}>
                          {num + 1} Habitaciones
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Grid container justifyContent="center">
                    <Button variant="contained" color="primary" type="submit" endIcon={<Send />}>
                      Enviar
                    </Button>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <SpecialPromotions />
          </Grid>
        </Grid>
      </animated.div>
      {/* Alerta de éxito */}
      <Snackbar open={showSuccessMessage} autoHideDuration={6000} onClose={() => setShowSuccessMessage(false)} message="Datos enviados correctamente" />
      {/* Alerta de error */}
      <Snackbar open={showErrorMessage} autoHideDuration={6000} onClose={() => setShowErrorMessage(false)} message="Todos los campos obligatorios deben completarse" />
    </section>
  );
}

export default ContactForm;
