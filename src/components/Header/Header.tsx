import React from 'react';

import {
  StyledHeader,
  Wrapper,
  StyledLogo,
  StyledNavigation,
  StyledUserInfoWrapper,
  StyledUserInfo
} from './Header.styles';

const Header: React.FC = () => {
  return (
    <>
      <StyledHeader data-testid="header">
        <Wrapper>
          <StyledLogo to="/">SlimMom</StyledLogo>
            <nav>
              <StyledNavigation to="/diary">Diary</StyledNavigation>
              <StyledNavigation to="/calculator">Calculator</StyledNavigation>
          </nav>
          <StyledUserInfoWrapper>
            <StyledUserInfo>Nic</StyledUserInfo>
            <StyledUserInfo>Exit</StyledUserInfo>
          </StyledUserInfoWrapper>
        </Wrapper>
      </StyledHeader>
    </>
  );
};

export default Header;
