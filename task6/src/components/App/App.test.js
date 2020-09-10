import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App.container';

test('renders app div', () => {
  const renderData = render(<App />);
  const isAppPresent = renderData.container.getElementsByClassName(
    'App__Container'
  ).length;

  expect(isAppPresent).toBe(1);
});
