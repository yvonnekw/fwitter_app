import React from 'react';
import './Modal.css';
import '../../assets/global.css';

interface ModalProps {
  children: JSX.Element

}

//const promps: ModalProps;

export const Modal:React.FC<ModalProps> = (props:ModalProps) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container bg-color">
        {props.children}
      </div>
    </div>
  )
}
