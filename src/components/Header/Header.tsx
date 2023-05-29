import React from 'react';

import Logo from '../Logo';
// import Navigation from '../Navigation';
import UserInfo from '../UserInfo';

import {
  StyledHeader
  // Wrapper
} from './Header.styles';


const Header: React.FC = () => {

  return (
    <>
      <StyledHeader data-testid="header">
        <Logo />
        {/* <Wrapper> */}
          {/* <Navigation /> */}
          <UserInfo />
        {/* </Wrapper> */}
      </StyledHeader>
    </>
  );
};

export default Header;
