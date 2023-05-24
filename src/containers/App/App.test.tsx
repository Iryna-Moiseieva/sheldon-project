import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../../redux/store';

import App from './App';

describe('testing App container', () => {
  it('should render App container correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>);

      // expect(screen.getByText(/Sheldon Project/i)).toBeInTheDocument();
    }
  );
});
