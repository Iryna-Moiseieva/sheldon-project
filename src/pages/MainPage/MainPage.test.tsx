import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import MainPage from './MainPage';

describe('testing MainPage component', () => {
  it('should render MainPage component correctly', () => {
    render(
      <BrowserRouter>
          <MainPage onSubmit={function (): void {
          throw new Error('Function not implemented.');
        } } currentTarget={{
          name: undefined,
          value: undefined
        }} />
      </ BrowserRouter>
    );

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    }
  );
});
