import React from 'react';

import PropTypes from 'prop-types';

export const Form = ({ props }) => {
  const { data, showValue } = props;

  const [form, setForm] = React.useState(
    data.reduce((acc, curr) => {
      acc[curr.name] = '';
      return acc;
    }, {}),
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    showValue(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      {data.map((el) => {
        return (
          <div key={el._id}>
            <label htmlFor={el.name}>{el.name}</label> <br />
            <br />
            <input
              id={el.name}
              name={el.name}
              type={el.type}
              placeholder={el.placeholder}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <br />
          </div>
        );
      })}
      <button type="submit">submit</button>
    </form>
  );
};

Form.propTypes = {
  email: PropTypes.string,
  pass: PropTypes.string,
  phone: PropTypes.number,
};

Form.defaultPropTypes = {
  email: 'not given yet',
  pass: 'default',
  phone: 'unset-0000',
};
