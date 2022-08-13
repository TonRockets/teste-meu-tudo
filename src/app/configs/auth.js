import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const keyStorage = 'teste-meutudo';

export const saveToken = (token) => sessionStorage.setItem(keyStorage, token);

export const getToken = () => sessionStorage.getItem(keyStorage);

export const removeToken = () => sessionStorage.removeItem(keyStorage);

export const cleanToken = () => sessionStorage.clear();

const hasToken = () => getToken() !== null;

export const isAuthenticated = () => hasToken();

export const AuthRouter = ({ children }) => {
  const isHome = useSelector((state) => state.user.home);

  if (isHome) {
    return <Navigate to={'/'} replace />;
  }
  return children;
};
