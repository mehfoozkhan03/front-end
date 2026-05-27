import React from 'react';

import { BaseURL } from '../utils/ApiCall.js';

export const Form = ({ props }) => {
  const { data, name } = props;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(`🚀 ~ form:`, form);
      const data = await BaseURL.post(`/${name}`, form);
      console.log(`🚀 ~ BaseURL:`, BaseURL);
      console.log(`🚀 ~ data:`, data);
    } catch (error) {
      console.log(`🚀 ~ error:`, error);
    }
  };

  /*   React.useEffect(() => {}, [form]); */

  return (
    <>
      <h1>{name}</h1>
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
        <button type="submit">{name}</button>
      </form>
    </>
  );
};
