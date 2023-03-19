import React from 'react';
import { render, screen } from '@testing-library/react';
import DiaryDateCalendar from './DiaryDateCalendar';

test('renders learn react link', () => {
  render(<DiaryDateCalendar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
