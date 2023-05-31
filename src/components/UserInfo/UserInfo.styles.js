import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledUserInfo = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

export const NavigationWrapper = styled.div`
  display: flex;
`;

export const Link = styled(NavLink)`
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-gray-100);

  &:not(:last-child) {
      margin-right: 24px;
    }

  &:hover,
  &:focus {
    color: var(--color-orange);
  }

  &.active {
    color: var(--color-black);
  }

`;

export const UserInfoWrapper = styled.div`
  display: flex;

`;

export const UserName = styled.p`
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-gray-100);

  &:not(:last-child) {
      margin-right: 24px;
    }
`;




