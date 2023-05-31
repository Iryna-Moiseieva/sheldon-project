import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import UserInfo from './UserInfo';

describe('testing UserInfo component', () => {
  it('should render UserInfo component correctly', () => {
    render(
      <BrowserRouter>
          <UserInfo />
      </BrowserRouter>
    );

    expect(screen.getByTestId('user-info')).toBeInTheDocument();
    }
  );
});
