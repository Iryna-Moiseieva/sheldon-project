import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.12);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 572px;
      width: 672px;

      background: #FFFFFF;
      box-shadow: 0px 22px 40px 0px rgba(0, 0, 0, 0.1);
      background-color: #FFFFFF;

    @media screen and (min-width: 1280px) {
      height: 574px;
  }
`;

