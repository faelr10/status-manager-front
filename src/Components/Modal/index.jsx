import React from "react";
import { Overlay, ModalContent, CloseButton } from "./style";

export function ModalComponent({ show, onClose, children }) {
  if (!show) return null;

  return (
    <Overlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        {children}
      </ModalContent>
    </Overlay>
  );
}
