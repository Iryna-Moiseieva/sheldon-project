import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {
  render(<App absolute={false} />);
  const linkElement = screen.getByText(/Sheldon Project/i);

  expect(linkElement).toBeInTheDocument();
});
