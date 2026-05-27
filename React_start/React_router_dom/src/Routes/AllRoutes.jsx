import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { CartPage } from '../Pages/CartPage';
import { Login } from '../Pages/Login';
import { PrivateRoutes } from '../Components/PrivateRoutes';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <CartPage />
          </PrivateRoutes>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};
