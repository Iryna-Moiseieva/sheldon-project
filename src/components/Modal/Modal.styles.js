import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

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

export const ModalCloseButton = styled(IoMdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 10;
  }
`;

export const ModalTitle = styled.p`
  margin: 64px 82px 20px;
  font-family: Verdana;
  font-size: 26px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(33, 33, 33, 1);
  margin-bottom: 20px;
`;

export const ModalTextCalories = styled.p`
  font-family: Verdana;
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: 0.04em;
  text-align: center;
  color: rgba(38, 64, 97, 1);
  margin-bottom: 32px;

  // &::after{
  // height: 0px;
  // width: 330px;
  // left: 475px;
  // top: 386px;
  // border-radius: 0px;
  // color: rgba(224, 224, 224, 1);
  // border: 10px solid rgba(224, 224, 224, 1);
  // margin-bottom: 12px;
  // }
`;

export const ModalTipsWrapper = styled.div`
  margin-right: 171px;
  margin-left: 171px;
`;

export const ModalTipsTitle = styled.p`
  font-family: Verdana;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: left;
  color: rgba(33, 33, 33, 1);
  margin-top: 20px;
`;

export const ModalTipsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 40px;
`;

export const ModalTipsItem = styled.li`
  font-family: Verdana;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: left;
  color: rgba(155, 159, 170, 1);
`;

export const ModalStartButton = styled.button`
display: block;
height: 43px;
width: 210px;
left: 535px;
top: 587px;
border-radius: 30px;
background: rgba(252, 132, 45, 1);
box-shadow: 0px 4px 10px 0px rgba(252, 132, 45, 0.5);
text-align: center;
text-decoration: none;
margin: 0 auto;
font-family: Verdana;
font-size: 14px;
font-weight: 700;
line-height: 17px;
letter-spacing: 0.04em;
text-align: center;
color: rgba(255, 255, 255, 1);
`;

