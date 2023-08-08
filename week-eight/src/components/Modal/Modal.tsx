import { ReactNode } from "react";
import "./styled.css";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return <div className="modal-container">{children}</div>;
}
