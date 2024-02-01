import React from "react";

interface ModelProps {
  children: React.ReactNode;
  clickHandler: () => void;
}

function Modal({ children, clickHandler }: ModelProps) {
  return (
    <div className="fixed inset-0 z-10" onClick={clickHandler}>
      {children}
    </div>
  );
}

export default Modal;
