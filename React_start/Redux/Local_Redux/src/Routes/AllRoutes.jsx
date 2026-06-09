import { Routes, Route } from 'react-router-dom';
import { Todo } from '../Pages/Todo';
import { Login } from '../Pages/Login';
import { Dummy } from '../Pages/Dummy';
import { PrivateRoutes } from '../Components/PrivateRoutes';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Todo />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/dummy"
        element={
          <PrivateRoutes>
            <Dummy />
          </PrivateRoutes>
        }
      ></Route>
    </Routes>
  );
};
