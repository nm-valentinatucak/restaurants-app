import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import useNotifications from '../hooks/useNotifications';
import { getUserFromStorage } from '../app/services';

const ProtectedRoute = ({ children }: any) => {
  const navigateTo = useNavigate();
  const user = getUserFromStorage();
  //   const { handleUserActionNotification } = useNotifications();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && !user) {
      navigateTo('/login');
    } else if (!user && location.pathname?.length > 1) {
      //   handleUserActionNotification({
      //     message: 'You need to be logged in to continue!',
      //     type: 'error',
      //     autoClose: 2500,
      //   });
      window.alert('You need to be logged in to continue!');
      navigateTo('/login');
    } else if (
      user &&
      new Date(JSON.parse(user).tokenExpiry).getTime() < new Date().getTime()
    ) {
      //   handleUserActionNotification({
      //     message: 'User session has expired!',
      //     type: 'error',
      //     autoClose: 2500,
      //   });
      window.alert('User session has expired!');
      navigateTo('/login');
    } else if (location.pathname === '/') {
      navigateTo('/dashboard');
    }
  }, [user, navigateTo, location]);

  if (user) {
    return children;
  }
};

export default ProtectedRoute;
