import React from "react";
import { useEffect } from "react";
import { Api } from "./Api/Api";
import { Cards } from "./Components/Cards";

const fetchApi = () => {
  return Api.get("/comments")
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const App = () => {
  const [data, setData] = React.useState();
  useEffect(() => {
    fetchApi().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-5">
        {data?.map((user, index) => {
          return <Cards key={index} User={user} />;
        })}
      </div>
    </>
  );
};
