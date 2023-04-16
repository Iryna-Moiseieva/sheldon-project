import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('testing App container', () => {
  it('should render App container correctly', () => {
    render(<App absolute={false} />);

    expect(screen.getByText(/Sheldon Project/i)).toBeInTheDocument();
    }
  );
});
