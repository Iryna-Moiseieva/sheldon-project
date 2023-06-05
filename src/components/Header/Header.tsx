import React from 'react';

import Logo from '../Logo';
import Navigation from '../Navigation';
// import UserInfo from '../UserInfo';

import {
  StyledHeader
} from './Header.styles';


const Header: React.FC = () => {

  return (
    <>
      <StyledHeader data-testid="header">
        <Logo />
          <Navigation />
          {/* <UserInfo /> */}
      </StyledHeader>
    </>
  );
};

export default Header;
