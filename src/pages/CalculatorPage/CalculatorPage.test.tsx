import React from 'react';
import { render, screen } from '@testing-library/react';

import CalculatorPage from './CalculatorPage';

test('renders learn react link', () => {
  render(<CalculatorPage />);
  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
