import React from 'react';
import { render, screen } from '@testing-library/react';

import DailyCalorieIntake from './DailyCalorieIntake';

test('renders learn react link', () => {
  render(<DailyCalorieIntake />);
  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
