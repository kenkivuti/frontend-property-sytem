import React from "react";
import "../style/modal.css";

interface ModalProps {
  show: boolean;
  onClose: () => void; // A function that doesn't return anything
  children: React.ReactNode; // The content of the modal (form in this case)
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) return null; // If 'show' is false, return nothing

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
