import React from 'react';

export const AuthCreateContext = React.createContext(null);

export const AuthContext = ({ children }) => {
  const [isAuth, setAuth] = React.useState(false);
  return (
    <AuthCreateContext.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthCreateContext.Provider>
  );
};
