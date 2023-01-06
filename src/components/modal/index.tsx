import React, { FC } from 'react';

import './modal.scss';

interface ModalProps {
  children: JSX.Element[] | JSX.Element;
  modalOpen: boolean;
}

export const Modal: FC<ModalProps> = ({ modalOpen, children }) => {
  return <div className={modalOpen ? 'modal open' : 'modal'}>{children}</div>;
};
