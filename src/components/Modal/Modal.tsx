import React, {   ReactNode } from 'react';

import {
  Backdrop,
  ModalWindow,
  ModalCloseButton,
  ModalTitle,
  ModalTipsWrapper,
  ModalTextCalories,
  ModalTipsTitle,
  ModalTipsList,
  ModalTipsItem,
  ModalStartButton
} from './Modal.styles';

interface ModalProps {
  children?: ReactNode;
  onClose: ()=> void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {

  return  (
    <Backdrop   data-testid="modal">
      <ModalWindow onClose={onClose}>
        <ModalCloseButton />
          <ModalTitle> Your recommended daily calorie intake is</ModalTitle>
            <ModalTextCalories>2800 ккал</ModalTextCalories>
              <ModalTipsWrapper>
                <ModalTipsTitle>Foods you should not eat</ModalTipsTitle>
                  <ModalTipsList>
                    <ModalTipsItem>1. Flour products</ModalTipsItem>
                    <ModalTipsItem>2. Milk</ModalTipsItem>
                    <ModalTipsItem>3. Red meat</ModalTipsItem>
                    <ModalTipsItem>4. Smoked meats</ModalTipsItem>
                  </ModalTipsList>
              </ModalTipsWrapper>
                <ModalStartButton type="submit">Start losing weight</ModalStartButton>
      </ModalWindow>
    </Backdrop>
  );
};

export default Modal;
