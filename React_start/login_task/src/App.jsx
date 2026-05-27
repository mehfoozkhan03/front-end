/* eslint-disable no-unused-vars */
import React from 'react';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import { Navbar } from './Components/Navbar';
import { AllRouter } from './Routes/AllRouter';

export const App = () => {
  return (
    <>
      <Navbar />
      <AllRouter />
    </>
  );
};
