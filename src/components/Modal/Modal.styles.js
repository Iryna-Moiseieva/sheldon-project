import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

import Button from '../../components/Button';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--overlay-color);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: absolute;
  // width: 100vw;
  // height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 672px;
  padding: 64px 82px 82px;

  background: var(--color-white);
  box-shadow: 0px 22px 40px 0px rgba(0, 0, 0, 0.1);
`;

export const ModalCloseButton = styled(IoMdClose)`
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 10;
`;

export const Title = styled.p`
  margin: 0px 82px 20px;
  font-size: var(--font-size-400);
  line-height: 1.36;
  letter-spacing: 0em;
  text-align: center;
`;

export const TextCalories = styled.p`
  font-size: var(--font-size-600);
  line-height: 1.21;
  letter-spacing: 0.04em;
  text-align: center;
  color: rgba(38, 64, 97, 1);
  margin-bottom: 32px;
`;

export const TipsWrapper = styled.div`
  width: 330px;
  margin: 12px 171px 40px;
  border-top: 1px solid var(--color-gray-300);
`;

export const TipsTitle = styled.p`
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: rgba(33, 33, 33, 1);
  margin-bottom: 20px;
`;

export const TipsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  // margin-bottom: 40px;
`;

export const TipsItem = styled.li`
  font-weight: normal;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: var(--color-gray-100);

  &:not(:last-child) {
      margin-bottom: 18px;
    }
`;

export const ModalStartButton = styled(Button).attrs({
  type: 'submit',
  text: 'Start losing weight'
})`
  margin: 0 auto;
`;
