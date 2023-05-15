//import useAuth from 'app/hooks/useAuth';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard = ({ children }:any) => {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  console.log("is authenticated  custom",isAuthenticated)
  const token=localStorage.getItem('token')
  if(isAuthenticated || (token && token!=undefined) ){
    return <>{children}</>;
  }

  //comentado por istael
 // if (isAuthenticated) return <>{children}</>;

  return <Navigate replace to="/session/signin" state={{ from: pathname }} />;
};

export default AuthGuard;
