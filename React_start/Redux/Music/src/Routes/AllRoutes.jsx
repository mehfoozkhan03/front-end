import { Route, Routes } from "react-router-dom";
import { MusicRecord } from "../Pages/MusicRecord";
import { Login } from "../Pages/Login";
import { ErrorPage } from "../Pages/ErrorPage";
import { PrivateRoutes } from "../Components/PrivateRoutes";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <MusicRecord />
          </PrivateRoutes>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/*" element={<ErrorPage />}></Route>
    </Routes>
  );
};
