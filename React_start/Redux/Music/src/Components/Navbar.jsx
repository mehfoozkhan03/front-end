import { useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";
import * as type from "../Redux/Features/AuthSlicer";

export const Navbar = () => {
  const dispatch = useDispatch();
  const Data = [
    {
      path: "/",
      element: "music",
    },
    {
      path: "login",
      element: "login",
    },
  ];
  return (
    <div className="navMain">
      {Data &&
        Data.map((el, i) => {
          return (
            <NavLink
              key={i + 1}
              to={el.path}
              style={({ isActive }) => {
                return { background: isActive ? "tomato" : "transparent" };
              }}
              className="navbar"
            >
              {el.element}
            </NavLink>
          );
        })}

      <button
        onClick={() => {
          dispatch(type.logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};
