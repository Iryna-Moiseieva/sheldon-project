import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  border: 2px solid red;

  display: flex;
  align-items: flex-end;
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




