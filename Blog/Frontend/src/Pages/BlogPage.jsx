import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blogApi } from '../Utils/Api';
import { useLocation } from 'react-router-dom';

const getSignleData = (url, token) => {
  // console.log(`🚀 ~ url:`, url);
  return blogApi.get(url, {
    headers: {
      token: `Barer ${token}`,
    },
  });
};

export const BlogPage = () => {
  // const dispatch = useDispatch();
  const [singleData, setSingleData] = useState(null);
  console.log(`🚀 ~ singleData:`, singleData);
  const location = useLocation();
  const { token } = useSelector((store) => store.auth);
  useEffect(() => {
    getSignleData(location.pathname, token)
      .then((res) => setSingleData(res.data))
      .catch((err) => console.log(err));
    // dispatch();
  }, []);
  return (
    <>
      {singleData && (
        <div key={singleData._id} style={{ border: '2px solid red' }}>
          <h1>{singleData.title}</h1>
          <h3>{singleData.category}</h3>
          <h4>{singleData.discription}</h4>
          <h5>{singleData.rate}</h5>
        </div>
      )}
    </>
  );
};
