import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoDesktop from '../../images/logo/logoDesktop.png';

export const StyledLogo = styled(Link)`
  // border: 2px solid var(--color-orange);
  display: inline-flex;

  @media screen and (min-width: 768px) {
    margin-right: 40px;
  }
`;

export const LogoImg = styled.img.attrs({
  src: `${logoDesktop}`
})`
  border: 2px solid black;
`;


