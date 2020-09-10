import React from 'react';
import { render } from '@testing-library/react';
import App from './App.container';

test('renders app div', () => {
  render(<App />);
});
