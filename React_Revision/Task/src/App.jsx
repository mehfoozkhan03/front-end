import React from "react";

import { Api } from "./Api/ApiCall";

const fetchData = () => {
  return Api.get("/posts")
    .then((res) => res)
    .catch((err) => err);
};

export const App = () => {
  React.useEffect(() => {
    fetchData()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <div>App</div>;
};
