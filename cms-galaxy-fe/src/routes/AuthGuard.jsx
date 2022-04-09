import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';


// configs
import { PATH_NAME } from "configs";

// helpers
import authStorage from 'helpers/authStorage';

function AuthGuard({ children }) {
  const navigate = useNavigate();
  const isAuth = authStorage.isAuthenticated();
  const accessToken = authStorage.getStorage('accessToken');

  const checkAuthenticate = async () => {
    try {
      const res = await axios.post("https://cms-resource-api.herokuapp.com/api/user/auth", {}, {
        headers: {
          'x-auth-token': accessToken
        }
      });
      const user = res.data?.data?.user;
      console.log('res: ', user)
    } catch(error) {
      authStorage.clearStorage();
      navigate(PATH_NAME.LOGIN);
    }
  }

  useEffect(() => {
    checkAuthenticate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(!isAuth) return <Navigate to={PATH_NAME.LOGIN} />

  return <>{children}</>;
}

export default AuthGuard
