import React from 'react';

export const Child = () => {
  React.useEffect(() => {
    let id = setInterval(() => {
      console.log(Date.now());
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <div>Child</div>;
};
