import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import VehiclesList from './VehiclesList.component';

test('renders vehicles list div', () => {
  const renderData = render(
    <VehiclesList
      isLoading={false}
      vehicles={[]}
      total={36}
      page={1}
      totalPages={3}
      search={''}
      onSearch={() => {}}
      onLoadMore={() => {}}
    />
  );

  const isVehiclesListPresent = renderData.container.getElementsByClassName(
    'VehiclesList__Container'
  ).length;

  expect(isVehiclesListPresent === 1).toBe(true);
});

test('load more vehicles', () => {
  let loadMoreClicks = 0;

  const onLoadMore = () => {
    loadMoreClicks = loadMoreClicks + 1;
  };

  const renderData = render(
    <VehiclesList
      isLoading={false}
      vehicles={[]}
      total={36}
      page={1}
      totalPages={3}
      search={''}
      onSearch={() => {}}
      onLoadMore={onLoadMore}
    />
  );

  const loadMoreButton = renderData.getByText('Cargar más');
  loadMoreButton.click();

  expect(loadMoreClicks > 0).toBe(true);
});
