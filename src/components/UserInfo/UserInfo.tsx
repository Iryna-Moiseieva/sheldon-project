import React from 'react';

import {
  StyledUserInfo,
  NavigationWrapper,
  Link,
  UserInfoWrapper,
  UserName
} from './UserInfo.styles';

export const UserInfo: React.FC = () => {
  return (
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
);
};

export default UserInfo;
