import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';



export const StyledHeader = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ececec;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled(Link)`
  height: 16px;
  width: 48px;
  left: 75px;
  top: 126px;
  border-radius: 0px;
  color: rgba(33, 33, 33, 1);
  text-decoration: none;
  cursor: pointer;
  align-items: center;
`;

export const StyledNavigation = styled(NavLink)`
  // display: flex;
  align-items: center;
  text-decoration: none;

  font-family: Verdana;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: rgba(155, 159, 170, 1);
  margin-left: 10px;

`;

export const StyledUserInfoWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const StyledUserInfo = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: Verdana;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: rgba(155, 159, 170, 1);
  margin-left: 10px;

`;
