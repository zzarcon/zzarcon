import * as React from 'react';
import {FC, ReactNode, MouseEvent } from 'react';
import * as ReactDOM from 'react-dom';
import { BlanketWrapper } from '../styled';


export interface BlanketProps {
  onClose?: () => void;
  children: ReactNode;
}

export const Blanket: FC<BlanketProps> = ({onClose, children}) => {
  const onBackgroundClick = (e: MouseEvent) => {
    if (e.target !== e.currentTarget) return;

    e.stopPropagation();
    onClose && onClose();
  }

  return ReactDOM.createPortal((
    <BlanketWrapper onClick={onBackgroundClick}>
      {children}
    </BlanketWrapper>
  ), document.body)
}