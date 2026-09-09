export const Cards = ({ value }) => {
  return (
    <div className="card">
      <h2>{value?.name}</h2>

      <p>Temperature: {value?.main.temp}</p>

      <p>Humidity: {value?.main.humidity}</p>

      <p>Clouds: {value?.clouds.all}</p>

      <p>Country: {value?.sys.country}</p>
    </div>
  );
};