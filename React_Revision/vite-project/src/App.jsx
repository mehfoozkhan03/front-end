import React from "react";

import {user} from "./Data.json";
import { Profile } from "./Components/Profile";

export const App = () => {
  console.log(user);
  return <>
  {
    user?.map((element,index)=>{
      return <Profile key={index+1} value={element}/>
    })
  }
  </>;
};
