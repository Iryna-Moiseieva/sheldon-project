import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

describe('testing Header component', () => {
  it('should render Header component correctly', () => {
    render(
      <BrowserRouter>
          <Header />
      </BrowserRouter>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    }
  );
});
