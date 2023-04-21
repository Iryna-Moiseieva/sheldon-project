import React from 'react';
import { render, screen } from '@testing-library/react';

import Loader from './Loader';

describe('testing Loader component', () => {
  it('should render Loader component correctly', () => {
    render(<Loader/>);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
    }
  );
});
