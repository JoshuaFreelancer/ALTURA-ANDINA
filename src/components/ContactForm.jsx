import React from 'react';
import { Typography, Grid, Card, CardContent, TextField, Button } from '@mui/material';
import { MdLocalOffer } from 'react-icons/md';
import { useSpring, animated } from 'react-spring';

function ContactForm() {
  const bounceProps = useSpring({
    from: { transform: 'translateY(-20px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: { tension: 200, friction: 10 },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se manejara el envío del formulario
  };

  return (
    <section id="contact-form" className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <Typography variant="h2" align="center" gutterBottom>
          Reserva ahora
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <animated.div style={bounceProps}>
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
                    />
                    <TextField
                      label="Correo Electrónico"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Mensaje"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      margin="normal"
                    />
                    <Button variant="contained" color="primary" type="submit">
                      Enviar
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </animated.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Promociones Especiales
                </Typography>
                <Typography variant="body1" gutterBottom>
                  ¡Aprovecha nuestras promociones especiales y reserva tu estancia hoy mismo!
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body2" gutterBottom>
                      20% de descuento en reservas anticipadas.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2" gutterBottom>
                      Desayuno gratis todos los días.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2" gutterBottom>
                      Tour gratuito por la ciudad para huéspedes.
                    </Typography>
                  </li>
                </ul>
                <MdLocalOffer style={{ fontSize: 60, color: '#FF9800' }} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default ContactForm;
