import {
  Form,
  Field,
  FormElement,
  FormRenderProps,
} from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import clsx from 'clsx';

import logo from '../../../../assets/logo.png';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const handleSubmit = (dataItem: { [name: string]: void }) =>
    alert(JSON.stringify(dataItem, null, 2));

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

            <Field name={'password'} component={Input} label={'Password'} />
          </fieldset>
          <div className={clsx('k-form-buttons', styles.buttonWrapper)}>
            <button
              type={'submit'}
              className={clsx(
                'k-button k-button-md k-rounded-md k-button-solid k-button-solid-base',
                styles.button
              )}
              //   disabled={!formRenderProps.allowSubmit}
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
