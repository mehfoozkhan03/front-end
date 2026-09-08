export const Cards = ({ value }) => {
  return (
    <div className="mx-10 mt-2  border rounded-lg p-3">
      <h2>{value?.name}</h2>

      <p>Temperature: {value?.main.temp}</p>

      <p>Humidity: {value?.main.humidity}</p>

      <p>Clouds: {value?.clouds.all}</p>

      <p>Country: {value?.sys.country}</p>
    </div>
  );
};