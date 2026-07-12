import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  console.log("location", location, location.pathname);

  const { isAuth } = useSelector((store) => store.auth);
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return children;
};
