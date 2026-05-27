import { Route, Routes } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { Signup } from '../Pages/Signup';
import { Home } from '../Pages/Home';

export const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
};
