import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../../redux/store';

import App from './App';

describe('testing App container', () => {
  it('should render App container correctly', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>);
      expect(screen.getByText(/Sheldon Project/i)).toBeInTheDocument();
    }
  );
});
