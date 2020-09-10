import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import VehiclesList from '../../components/VehiclesList';

import './Vehicles.css';

const VehiclesPage = () => (
  <DefaultLayout>
    <VehiclesList />
  </DefaultLayout>
);

export default VehiclesPage;
