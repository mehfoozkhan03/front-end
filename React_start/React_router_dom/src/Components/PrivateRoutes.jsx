import React from 'react';
import { AuthCreateContext } from '../Context/AuthContext';

import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
  const { isAuth } = React.useContext(AuthCreateContext);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};
