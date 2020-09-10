import React from 'react';
import { Typography } from '@material-ui/core';
import DefaultLayout from '../../layouts/DefaultLayout';
import BrandsList from '../../components/BrandsList';

import './Brands.css';

const BrandsPage = () => (
  <DefaultLayout>
    <Typography align="left" variant="h5" color="primary">
      Marcas
    </Typography>
    <BrandsList />
  </DefaultLayout>
);

export default BrandsPage;
