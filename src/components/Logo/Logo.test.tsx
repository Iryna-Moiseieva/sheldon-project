import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Logo from './Logo';

describe('testing Logo component', () => {
  it('should render Logo component correctly', () => {
    render(
      <BrowserRouter>
          <Logo />
      </ BrowserRouter>
    );

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    }
  );
});
