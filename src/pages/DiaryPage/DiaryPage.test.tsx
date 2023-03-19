import React from 'react';
import { render, screen } from '@testing-library/react';
import DiaryPage from './DiaryPage';

test('renders learn react link', () => {
  render(<DiaryPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
