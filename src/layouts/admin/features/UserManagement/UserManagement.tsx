import { useState } from 'react';
import clsx from 'clsx';

import AddEditUserModal from './components/AddEditUserModal/AddEditUserModal';
import { User } from '../../../../types/typeDefinitions';

import styles from './UserManagement.module.scss';

const UserManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<number>();
  const [user, setUser] = useState<User>();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <AddEditUserModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalType={modalType}
        user={user}
        setUser={setUser}
      />
      <button
        className={clsx(
          'k-button k-button-md k-rounded-md k-button-solid',
          styles.button
        )}
        onClick={openModal}
      >
        Add new
      </button>
    </div>
  );
};

export default UserManagement;
