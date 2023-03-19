import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from './UserInfo';

test('renders learn react link', () => {
  render(<UserInfo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
