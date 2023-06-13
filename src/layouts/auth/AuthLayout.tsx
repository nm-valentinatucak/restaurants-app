import LoginForm from './components/Login/LoginForm';

import styles from './AuthLayout.module.scss';

const AuthLayout = () => {
  return (
    <div className={styles.authLayout}>
      <LoginForm />
    </div>
  );
};

export default AuthLayout;
