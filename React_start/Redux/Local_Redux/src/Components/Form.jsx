import React from 'react';
import { useDispatch } from 'react-redux';

import { loginForm } from '../App/Auth/ActionType';

export const Form = ({ props }) => {
  const dispatch = useDispatch();
  const [form, setForm] = React.useState(
    props.data?.reduce((acc, curr) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // loginForm(dispatch, form);
    dispatch(loginForm(form));
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.data?.map((el) => {
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
      <button type="submit">{props.name}</button>
    </form>
  );
};
