import React from 'react';
import { render, screen } from '@testing-library/react';
import RightSideBar from './RightSideBar';

test('renders learn react link', () => {
  render(<RightSideBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
