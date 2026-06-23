import React from "react";
import { Route,Routes } from "react-router-dom";
import { MusicRecord } from "../Pages/MusicRecord";
import { Login } from "../Pages/Login";
import { ErrorPage } from "../Pages/ErrorPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MusicRecord/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/*" element={<ErrorPage />}></Route>
    </Routes>
  );
};
