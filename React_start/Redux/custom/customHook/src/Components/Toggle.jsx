import { useState } from 'react';

export const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (val) => {
    if (typeof val !== 'boolean') {
      setValue(!val);
    } else {
      setValue(val);
    }
  };

  return [value, toggleValue];
};
