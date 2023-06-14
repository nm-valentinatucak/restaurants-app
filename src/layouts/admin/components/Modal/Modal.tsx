import * as React from 'react';
import { Dialog } from '@progress/kendo-react-dialogs';

import styles from './Modal.module.scss';

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
        <Dialog title={title} onClose={onClose} className={styles.dialog}>
          {children}
        </Dialog>
      )}
    </div>
  );
};

export default Modal;
