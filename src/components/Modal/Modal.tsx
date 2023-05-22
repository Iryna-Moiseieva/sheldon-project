import React, {  useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, ModalWindow } from './Modal.styles';

interface ModalProps {
  children: ReactNode;
  onClose: boolean;
}

const modalRoot = document.querySelector('#modal-root') as HTMLElement;
const html = document.querySelector('html') as HTMLElement;

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {

  useEffect(() => {
    const handleKeyDown = (e: { code: string; }) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    html.classList.add('disable-scroll');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      html.classList.remove('disable-scroll');
    };
  }, [onClose]);

  const handleBackdropClick = (e: { currentTarget: unknown; target: unknown; }) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal (
    <Backdrop onclick={handleBackdropClick}  data-testid="modal">
      <ModalWindow onClose={onClose}>
        { children }
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
