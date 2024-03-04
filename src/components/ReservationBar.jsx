import React from 'react';
import { FormControl, FormLabel, Input, MenuItem, Select, Button } from '@mui/material';
import { PeopleAlt, Hotel } from '@mui/icons-material';

const ReservationBar = () => {
  return (
    <div className="flex flex-wrap justify-center items-center" style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.8rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <FormControl style={{ margin: '0.8rem' }}>
        <FormLabel htmlFor="check-in">Entrada</FormLabel>
        <Input id="check-in" type="date" size="small" />
      </FormControl>
      <FormControl style={{ margin: '0.8rem' }}>
        <FormLabel htmlFor="check-out">Salida</FormLabel>
        <Input id="check-out" type="date" size="small" />
      </FormControl>
      <FormControl style={{ margin: '0.8rem' }}>
        <FormLabel htmlFor="adults">Adultos</FormLabel>
        <Select id="adults" size="small" defaultValue={1} startAdornment={<PeopleAlt />}>
          {[...Array(8).keys()].map((num) => (
            <MenuItem key={num + 1} value={num + 1}>
              {num + 1} Adultos
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ margin: '0.8rem' }}>
        <FormLabel htmlFor="kids">Niños</FormLabel>
        <Select id="kids" size="small" defaultValue={0} startAdornment={<PeopleAlt />}>
          {[...Array(8).keys()].map((num) => (
            <MenuItem key={num} value={num}>
              {num} Niños
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ margin: '0.8rem' }}>
        <FormLabel htmlFor="rooms">Habitaciones</FormLabel>
        <Select id="rooms" size="small" defaultValue={1} startAdornment={<Hotel />}>
          {[...Array(8).keys()].map((num) => (
            <MenuItem key={num + 1} value={num + 1}>
              {num + 1} Habitaciones
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" size="large" color="primary" style={{ marginTop: '1.5rem' }}>
        Reservar
      </Button>
    </div>
  );
};

export default ReservationBar;
