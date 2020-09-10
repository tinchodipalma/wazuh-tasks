import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BrandsList from './BrandsList.component';

test('renders brands list div', () => {
  const renderData = render(
    <BrandsList
      isLoading={false}
      brands={[]}
      total={36}
      page={1}
      totalPages={3}
      search={''}
      onSearch={() => {}}
      onLoadMore={() => {}}
    />
  );

  const isBrandsListPresent = renderData.container.getElementsByClassName(
    'BrandsList__Container'
  ).length;

  expect(isBrandsListPresent === 1).toBe(true);
});

test('load more brands', () => {
  let loadMoreClicks = 0;

  const onLoadMore = () => {
    loadMoreClicks = loadMoreClicks + 1;
  };

  const renderData = render(
    <BrandsList
      isLoading={false}
      brands={[]}
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
