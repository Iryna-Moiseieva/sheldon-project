import React from 'react';
import { render, screen } from '@testing-library/react';

import CalculatorCalorieForm from './CalculatorCalorieForm';

test('renders learn react link', () => {
  render(<CalculatorCalorieForm />);
  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
