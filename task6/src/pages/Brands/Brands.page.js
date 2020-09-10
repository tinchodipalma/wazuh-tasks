import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import BrandsList from '../../components/BrandsList';

import './Brands.css';

const BrandsPage = () => (
  <DefaultLayout>
    <BrandsList />
  </DefaultLayout>
);

export default BrandsPage;
