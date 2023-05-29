import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './Navigation';

describe('testing Navigation component', () => {
  it('should render Navigation component correctly', () => {
    render(
      <BrowserRouter>
          <Navigation />
      </ BrowserRouter>
    );

    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    }
  );
});
