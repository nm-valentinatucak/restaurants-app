import { FC } from 'react';
import clsx from 'clsx';
import { Input } from '@progress/kendo-react-inputs';
import { DialogActionsBar } from '@progress/kendo-react-dialogs';
import {
  Field,
  Form,
  FormElement,
  FormRenderProps,
} from '@progress/kendo-react-form';

import {
  AddEditUserModalProps,
  User,
} from '../../../../../../types/typeDefinitions';
import Modal from '../../../../components/Modal/Modal';
import {
  useAddUserMutation,
  useAddUserToRoleMutation,
  useEditUserMutation,
} from '../../hooks/UserManagementApi';
import RoleField from './components/RoleField/RoleField';

import styles from './AddEditUserModal.module.scss';

const AddEditUserModal: FC<AddEditUserModalProps> = ({
  isOpen,
  closeModal,
  modalType,
  user,
  setUser,
}) => {
  const handleSubmit = (values: { [name: string]: any }) => {
    const dataItem: User = {
      userName: values?.userName,
      fullName: values?.fullName,
      email: values?.email,
      password: values?.password,
      repeatPassword: values?.repeatPassword,
      role: values?.role,
    };

    alert(JSON.stringify(dataItem, null, 2));
    handlePublish(dataItem);
  };

  const [addUser] = useAddUserMutation();
  const [editUser] = useEditUserMutation();
  const [addUserToRole] = useAddUserToRoleMutation();

  const emailRegex = new RegExp(/\S+@\S+\.\S+/);
  const emailValidator = (value: string) =>
    emailRegex.test(value) ? '' : 'Please enter a valid email.';

  const handlePublish = async (formData: User) => {
    if (modalType === 1) {
      try {
        const addUserAttempt = await addUser(formData);

        if ('error' in addUserAttempt) {
          window.alert(addUserAttempt.error);
        } else {
          setUser && setUser(formData);
          closeModal();
          window.alert('Added user successfully!');
        }
      } catch (error: any) {
        window.alert(error.data.message);
      }
    } else {
      try {
        const editUserAttempt = await editUser({
          id: user?.id,
          userName: formData?.userName,
          fullName: formData?.fullName,
          email: formData?.email,
        });

        const addRoleAttempt = await addUserToRole({
          roleId: formData?.role?.id,
          userId: user?.id,
        });

        if ('error' in editUserAttempt) {
          window.alert(editUserAttempt.error);
        } else if ('error' in addRoleAttempt) {
          window.alert(addRoleAttempt.error);
        } else {
          setUser && setUser(formData);
          closeModal();

          window.alert('User updated successfully!');
        }
      } catch (error: any) {
        window.alert(error.data.message);
      }
    }
  };

  return (
    <Modal
      title={
        modalType === 1
          ? 'Add new user'
          : `Edit user ${user?.userName ? `${user?.userName}` : ''} `
      }
      isOpen={isOpen}
      onClose={closeModal}
    >
      <Form
        onSubmit={handleSubmit}
        initialValues={user ? user : undefined}
        render={(formRenderProps: FormRenderProps) => (
          <FormElement className={styles.formElement}>
            <fieldset className={clsx('k-form-fieldset')}>
              <Field name={'userName'} component={Input} label={'Username'} />

              <Field name={'fullName'} component={Input} label={'Full name'} />

              <Field
                name={'email'}
                type={'email'}
                component={Input}
                label={'Email'}
                validator={emailValidator}
              />

              {modalType === 2 && <Field name={'role'} component={RoleField} />}

              {modalType === 1 && (
                <>
                  <Field
                    name={'password'}
                    type={'password'}
                    component={Input}
                    label={'Password'}
                  />

                  <Field
                    name={'repeatPassword'}
                    type={'password'}
                    component={Input}
                    label={'Repeat password'}
                  />
                </>
              )}
            </fieldset>

            <DialogActionsBar>
              <button
                className={clsx(
                  'k-button k-button-md k-rounded-md k-button-solid k-button-solid-base'
                )}
                type='button'
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className={clsx(
                  'k-button k-button-md k-rounded-md k-button-solid k-button-solid-base',
                  styles.saveButton
                )}
                type='submit'
              >
                Save
              </button>
            </DialogActionsBar>
          </FormElement>
        )}
      />
    </Modal>
  );
};

export default AddEditUserModal;
