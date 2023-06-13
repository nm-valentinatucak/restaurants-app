import {
  Form,
  Field,
  FormElement,
  FormRenderProps,
} from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import { setUserToStorage } from '../../../../app/services';
import { LoginProps } from '../../../../types/typeDefinitions';
import { useLoginUserMutation } from '../../hooks/AuthApi';
import logo from '../../../../assets/logo.png';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const navigateTo = useNavigate();

  const [loginUser] = useLoginUserMutation();

  const handleSubmit = async (dataItem: { [name: string]: any }) => {
    try {
      const formData: LoginProps = {
        loginCredential: dataItem.email,
        password: dataItem.password,
      };
      await handleFormSubmit(formData);
    } catch (error: any) {
      window.alert(error);
    }
  };

  const handleFormSubmit = async (data: LoginProps) => {
    try {
      const loginAttempt = await loginUser({
        password: data?.password as string,
        loginCredential: data?.loginCredential,
      }).unwrap();

      if (loginAttempt) {
        navigateTo('/dashboard');
        window.alert('success');
        setUserToStorage(loginAttempt);
      }
    } catch (error: any) {
      window.alert(error);
    }
  };

  const emailRegex = new RegExp(/\S+@\S+\.\S+/);
  const emailValidator = (value: string) =>
    emailRegex.test(value) ? '' : 'Please enter a valid email.';

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps: FormRenderProps) => (
        <FormElement className={styles.formElement}>
          <fieldset className={clsx('k-form-fieldset', styles.fieldset)}>
            <legend className={styles.legend}>
              <img src={logo} alt='Logo' />
              <span className={styles.title}>Log In to Dashboard</span>
              <span className={styles.subtitle}>
                Enter your email and password below
              </span>
            </legend>

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
          <div className={clsx('k-form-buttons', styles.buttonWrapper)}>
            <button
              type={'submit'}
              className={clsx(
                'k-button k-button-md k-rounded-md k-button-solid k-button-solid-base',
                styles.button
              )}
              disabled={!formRenderProps.allowSubmit}
            >
              Log In
            </button>
          </div>
        </FormElement>
      )}
    />
  );
};

export default LoginForm;
