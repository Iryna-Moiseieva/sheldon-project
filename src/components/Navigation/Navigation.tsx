import React from 'react';

import { StyledNavigation, Link } from './Navigation.styles';

export const Navigation: React.FC = () => {
  return (
    <StyledNavigation
      data-testid="navigation">
      <Link to="/diary">Diary</Link>
      <Link to="/calculator">Calculator</Link>
    </StyledNavigation>
);
};

export default Navigation;
