import * as React from 'react';
import { Dialog } from '@progress/kendo-react-dialogs';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  return (
    <div>
      {isOpen && (
        <Dialog title={title} onClose={onClose}>
          {children}
        </Dialog>
      )}
    </div>
  );
};

export default Modal;
