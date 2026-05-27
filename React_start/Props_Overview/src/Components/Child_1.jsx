import React from 'react';

import PropTypes from 'prop-types';

export const Child_1 = ({ no, name, arr }) => {
  console.log(`🚀 ~ name:`, typeof name, name);
  return (
    <h1>
      Child_{no} - {name} - {arr}
    </h1>
  );
};

Child_1.propTypes = {
  no: PropTypes.number,
  name: PropTypes.string,
  arr: PropTypes.oneOf(['admin', 'student', 'trainer', 'default']),
};

Child_1.defaultProps = {
  name: 'mehfooz',
  arr: 'default',
};

// read this -> https://www.npmjs.com/package/prop-types
