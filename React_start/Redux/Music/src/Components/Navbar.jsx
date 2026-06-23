import React from "react";

import { NavLink } from "react-router-dom";

export const Navbar = () => {
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
    </div>
  );
};
