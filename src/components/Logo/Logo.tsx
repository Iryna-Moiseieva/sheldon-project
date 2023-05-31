import React from 'react';

import { StyledLogo, LogoImg } from './Logo.styles';

export const Logo: React.FC = () => {
  return (
    <StyledLogo to= "/" data-testid="logo">
      <LogoImg/>
    </StyledLogo>
);
};

export default Logo;
