import React from "react";
import { Api, api_key } from "../Api/ApiCall";
import { Cards } from "../Components/Cards";

// Fetch weather by search text or query
const getData = (value) => {
  return Api.get(`?q=${value.trim() || "mumbai"}&appid=${api_key || ""}`);
};

// Fetch weather by geographic coordinates
const getDataByCoords = (lat, lon) => {
  return Api.get(`?lat=${lat}&lon=${lon}&appid=${api_key || ""}`);
};

export const WeatherCard = () => {
  const [text, setText] = React.useState("");
  const [weather, setWeather] = React.useState(null);
  const [coords, setCoords] = React.useState(null);

  // Initial load: Request user geolocation
  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ lat: latitude, lon: longitude });

          // Fetch weather using coordinates
          getDataByCoords(latitude, longitude)
            .then((res) => {
              console.log("Geolocation Weather Data:", res.data);
              setWeather(res.data);
              // Update text input to reflect detected city name if available
              if (res.data?.name) {
                setText(res.data.name);
              }
            })
            .catch((err) => console.log("Coord weather error:", err));
        },
        (error) => {
          console.warn("Geolocation denied or failed. Falling back to default city:", error.message);
          // Fallback to default search city
          getData("mumbai")
            .then((res) => setWeather(res.data))
            .catch((err) => console.log(err));
        }
      );
    } else {
      // Fallback if Geolocation API is not supported by browser
      getData("mumbai")
        .then((res) => setWeather(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  // Update weather when user types in search input
  React.useEffect(() => {
    if (!text.trim()) return;

    getData(text)
      .then((res) => {
        console.log("Search Weather Data:", res.data);
        setWeather(res.data);
      })
      .catch((err) => console.log(err));
  }, [text]);

  // Handle map src URL: Prioritize coordinates, fallback to query text
  const mapSrc = coords && !text.trim()
    ? `https://www.google.com/maps/embed/v1/place?q=${coords.lat},${coords.lon}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
    : `https://www.google.com/maps/embed/v1/place?q=${text.trim() || "mumbai"}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;

  return (
    <div className="mx-10 mt-2 flex flex-col justify-center">
      <div className="text-3xl font-semibold">Enter the location here...</div>
      <input
      className = ""
        type="text"
        value={text}
        placeholder="Enter city..."
        onChange={(e) => {
          const val = e.target.value;
          setText(val);
          if (val.trim().length === 0) {
            setWeather(null);
          }
        }}
      />

      <iframe
        className="w-[100%] h-[60vh] border-0 mt-4"
        src={mapSrc}
        title="Location Map"
      ></iframe>

      {weather?.length === 0 || weather === null ? (
        <h1>no Data🤷‍♀️🤷‍♂️</h1>
      ) : (
        <Cards value={weather} />
      )}
    </div>
  );
};