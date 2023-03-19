import React from 'react';
import { render, screen } from '@testing-library/react';
import DiaryProductsListItem from './DiaryProductsListItem';

test('renders learn react link', () => {
  render(<DiaryProductsListItem />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
