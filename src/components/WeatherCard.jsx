export default function WeatherCard({ data }) {
    const { name, main, weather, wind } = data;
    const icon = weather && weather[0] ? `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png` : "";
  
    return (
      <div className="p-4 bg-white shadow rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        {icon && <img src={icon} alt={weather[0].description} className="mx-auto" />}
        <p className="text-xl">{weather[0].main}</p>
        <p className="text-lg">Temp: {main.temp} °C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {wind.speed} km/h</p>
      </div>
    );
  }
  