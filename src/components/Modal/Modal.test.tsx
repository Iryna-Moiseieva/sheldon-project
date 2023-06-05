import React from 'react';
import { render } from '@testing-library/react';


import Modal from './Modal';

describe('testing Loader component', () => {
  it('should render Loader component correctly', () => {
    render(<Modal />);

    // expect(screen.getByTestId('loader')).toBeInTheDocument();
    }
  );
});
