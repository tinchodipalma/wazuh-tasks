import React from 'react';
import { Typography } from '@material-ui/core';
import DefaultLayout from '../../layouts/DefaultLayout';
import VehiclesList from '../../components/VehiclesList';

import './Vehicles.css';

const VehiclesPage = () => (
  <DefaultLayout>
    <Typography align="left" variant="h5" color="primary">
      Vehículos
    </Typography>
    <VehiclesList />
  </DefaultLayout>
);

export default VehiclesPage;
