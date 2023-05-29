import React from 'react';

import {
  StyledUserInfo,
  NavigationWrapper,
  Link,
  UserInfoWrapper,
  UserName
  // Wrapper

} from './UserInfo.styles';

export const UserInfo: React.FC = () => {
  return (
    // <Wrapper>
    <StyledUserInfo data-testid="user-info">

      <NavigationWrapper>
        <Link to="/login">Log in</Link>
        <Link to="/registration">Registration</Link>
      </NavigationWrapper>
      <UserInfoWrapper>
        <UserName>Nic</UserName>
        <Link to="/">Exit</Link>
        </UserInfoWrapper>
      </StyledUserInfo>
      // </Wrapper>
);
};

export default UserInfo;
