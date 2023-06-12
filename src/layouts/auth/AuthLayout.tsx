import LoginForm from './components/login/LoginForm';

import styles from './AuthLayout.module.scss';

const AuthLayout = () => {
  return (
    <div className={styles.authLayout}>
      <LoginForm />
    </div>
  );
};

export default AuthLayout;
