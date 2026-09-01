import React from "react";
import { Profile } from "./Components/Profile";

import { user } from "../Data.json";

export const App = () => {
  console.log(user);
  return (
    <>
      {user &&
        user?.map((element) => {
          return <Profile key={element.id} value={element} />; 
        })}
    </>
  );
};
