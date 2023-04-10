import React from 'react';
import { render, screen } from '@testing-library/react';

import DiaryProductsList from './DiaryProductsList';

test('renders learn react link', () => {
  render(<DiaryProductsList />);
  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
