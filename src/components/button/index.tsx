import React, { FC } from 'react';

import './button.scss';

interface ButtonProps {
  children: JSX.Element[] | JSX.Element;
  className: string;
  click: () => void;
}

export const Button: FC<ButtonProps> = ({ children, className, click }) => {
  return (
    <button onClick={click} className={className}>
      {children}
    </button>
  );
};
