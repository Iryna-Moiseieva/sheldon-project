import React from 'react';
import { render, screen } from '@testing-library/react';

import DailyCaloriesForm from './DailyCaloriesForm';

test('renders learn react link', () => {
  render(<DailyCaloriesForm />);
  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
