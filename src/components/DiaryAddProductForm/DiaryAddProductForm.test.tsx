import React from 'react';
import { render, screen } from '@testing-library/react';

import DiaryAddProductForm from './DiaryAddProductForm';

test('renders learn react link', () => {
  render(<DiaryAddProductForm />);
  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
