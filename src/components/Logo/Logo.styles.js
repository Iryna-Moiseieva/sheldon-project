import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../images/logo/desktop/logo.png';

export const StyledLogo = styled(Link)`
  display: flex;

  @media screen and (min-width: 768px) {
    margin-right: 40px;
  }
`;

export const LogoImg = styled.img.attrs({
  src: `${logo}`
})`

`;


