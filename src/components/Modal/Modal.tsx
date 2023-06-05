import React, { useState } from 'react';

import {
  Backdrop,
  ModalWindow,
  ModalCloseButton,
  Title,
  TipsWrapper,
  TextCalories,
  TipsTitle,
  TipsList,
  TipsItem,
  ModalStartButton
} from './Modal.styles';

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <Backdrop data-testid="modal"
          onClick={() => setIsOpen(false)}>
          <ModalWindow>
            <ModalCloseButton onClick={() => setIsOpen(false)} />
            <Title>Your recommended daily calorie intake is</Title>
            <TextCalories>2800 ккал</TextCalories>
              <TipsWrapper>
                <TipsTitle>Foods you should not eat</TipsTitle>
                  <TipsList>
                    <TipsItem>1. Flour products</TipsItem>
                    <TipsItem>2. Milk</TipsItem>
                    <TipsItem>3. Red meat</TipsItem>
                    <TipsItem>4. Smoked meats</TipsItem>
                  </TipsList>
              </TipsWrapper>
              <ModalStartButton onClick={() => setIsOpen(false)}/>
          </ModalWindow>
        </Backdrop>)}
    </>
  );
};

export default Modal;
