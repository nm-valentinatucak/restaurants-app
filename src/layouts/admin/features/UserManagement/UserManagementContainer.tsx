import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import {
  useDeleteUserMutation,
  useGetUsersListQuery,
} from './hooks/UserManagementApi';
import {
  getUserFromStorage,
  removeUserFromStorage,
} from '../../../../app/services';
import { User } from '../../../../types/typeDefinitions';
import AddEditUserModal from './components/AddEditUserModal/AddEditUserModal';
import UserManagementGrid from './components/UserManagementGrid/UserManagementGrid';

import styles from './UserManagementContainer.module.scss';

const UserManagementContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<number>();
  const [user, setUser] = useState<User>();

  const userJson: string | null = getUserFromStorage();
  const loggedUser: User | null = userJson ? JSON.parse(userJson) : null;

  const { data: usersData, isFetching: isUsersDataFetching } =
    useGetUsersListQuery();
  const [usersList, setUsersList] = useState<User[]>();

  useEffect(() => {
    !isUsersDataFetching && setUsersList(usersData?.users);
  }, [usersData, isUsersDataFetching]);

  const [deleteUser] = useDeleteUserMutation();

  const navigateTo = useNavigate();

  const openModal = async (type: number) => {
    setIsModalOpen(true);
    setModalType(type);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(undefined);
    setUser(undefined);
  };

  const handleEdit = (dataItem: User) => {
    setUser(dataItem);
    openModal(2);
  };

  const handleDelete = async (dataItem: User) => {
    if (window.confirm('Are you sure you want to delete this user?'))
      try {
        const deleteRequest = await deleteUser(dataItem.id);
        if ('error' in deleteRequest) {
          window.alert(deleteRequest.error);
        } else {
          window.alert('Deleted user successfully!');

          if (dataItem?.id === loggedUser?.id) {
            navigateTo('/login');
            removeUserFromStorage();
          }
        }
      } catch (error: any) {
        window.alert(error);
      }
  };

  return (
    <>
      <AddEditUserModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalType={modalType}
        user={user}
        setUser={setUser}
      />

      <UserManagementGrid
        data={usersList}
        openModal={openModal}
        loggedUser={loggedUser}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default UserManagementContainer;
