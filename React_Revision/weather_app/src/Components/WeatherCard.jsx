import React from "react";

import { Api, api_key } from "../Api/ApiCall";
import {Cards} from '../Components/Cards'

const getData = (value) => {
  return Api.get(`?q=${value.trim() || "mumbai"}&appid=${api_key || ""}`);
};

export const WeatherCard = () => {
  const [text, setText] = React.useState("");
  const [weather, setWeather] = React.useState(null)

  React.useEffect(() => {
    if (text.trim() === "") return;
     getData(text)
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch((err) => console.log(err));
  }, [text]);
//   console.log("text", text);

  return (
    <div className="mx-10 mt-2 bg-blue-200">
      <div>WeatherCard</div>
      <input
        type="text"
        placeholder=""
        onChange={(e) => {
          setTimeout(() => {
            setText(e.target.value);
          }, 1000);
        }}
         className="border border-grey-200 rounded-lg"/>
        {weather && (
        <Cards value={weather} />
      )}
    </div>
  );
};
