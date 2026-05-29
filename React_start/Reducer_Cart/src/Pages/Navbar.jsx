import React, { useContext } from 'react';
import { CartCreateContext } from '../Context/CartContext';

export const Navbar = () => {
  const { state } = useContext(CartCreateContext);
  console.log(`🚀 ~ state:`, state);
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        listStyle: 'none',
        textTransform: 'capitalize',
      }}
    >
      <li>home</li>
      <li>about</li>
      <div
        style={{
          position: 'relative',
        }}
      >
        <li>cart</li>
        {state?.count > 0 && (
          <span
            style={{
              position: 'absolute',
              right: -10,
              background: 'tomato',
              padding: '3px 8px',
              borderRadius: '10px',
            }}
          >
            {state.count}
          </span>
        )}
      </div>
    </nav>
  );
};
