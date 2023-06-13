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

import { AddEditUserModalProps } from '../../../../../../types/typeDefinitions';
import Modal from '../../../../components/Modal/Modal';

import styles from './AddEditUserModal.module.scss';

const AddEditUserModal: FC<AddEditUserModalProps> = ({
  isOpen,
  closeModal,
  modalType,
  user,
  setUser,
}) => {
  const handleSubmit = (dataItem: { [name: string]: void }) => {
    alert(JSON.stringify(dataItem, null, 2));
    closeModal();
  };

  const emailRegex = new RegExp(/\S+@\S+\.\S+/);
  const emailValidator = (value: string) =>
    emailRegex.test(value) ? '' : 'Please enter a valid email.';

  return (
    <Modal title='Add new' isOpen={isOpen} onClose={closeModal}>
      <Form
        onSubmit={handleSubmit}
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

              <Field
                name={'password'}
                type={'password'}
                component={Input}
                label={'Password'}
              />
            </fieldset>

            <DialogActionsBar>
              <button
                className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base'
                type='button'
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base'
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
