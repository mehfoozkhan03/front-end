import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { BlogData } from '../App/Slicer/BlogSlice';
import { blogApi } from './../Utils/Api';

export const Home = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useSelector((state) => state.Blog);

  React.useEffect(() => {
    try {
      blogApi
        .get('/')
        .then((res) => dispatch(BlogData(res.data)))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(`🚀 ~ error:`, error);
    }
  }, []);

  return (
    <div className="flex justify-center item-center w-[80%] m-auto">
      {isLoading ? (
        <h1>Loading.....</h1>
      ) : (
        data &&
        data?.map((el) => {
          return (
            <NavLink
              to={`/blog/${el._id}`}
              key={el._id}
              style={{ border: '2px solid red' }}
            >
              <h1>{el.title}</h1>
              <h3>{el.category}</h3>
              <h4>{el.discription}</h4>
              <h5>{el.rate}</h5>
            </NavLink>
          );
        })
      )}
    </div>
  );
};
