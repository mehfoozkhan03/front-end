// import React from 'react';

import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const isActiveValue = {
    background: 'tomato',
    padding: '0.5rem 0.8rem',
    border: '2px solid #000',
    borderRadius: '10px',
    color: '#000',
  };

  const data = [
    {
      path: '/',
      element: 'home',
    },
    {
      path: '/login',
      element: 'login',
    },

    {
      path: '/signup',
      element: 'signup',
    },
  ];

  return (
    <div
      style={{
        border: '2px solid black',
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '10px 0',
        textDecoration: 'none',
        color: 'black',
      }}
    >
      {data.map((el, i) => {
        return (
          <NavLink
            to={el.path}
            key={i}
            style={({ isActive }) => {
              return isActive
                ? {
                    ...isActiveValue,
                    textDecoration: 'none',
                  }
                : {
                    ...isActiveValue,
                    textDecoration: 'none',
                    background: 'transparent',
                  };
            }}
          >
            {el.element}
          </NavLink>
        );
      })}
    </div>
  );
};
