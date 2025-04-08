import axios from "axios";

const API_BASE = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  try {
    const res = await axios.get(API_BASE, {
      params: {
        q: city,
        appid: import.meta.env.VITE_WEATHER_API_KEY,
        units: "metric",
      },
    });
    return res.data;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw err.response.data.message;
    } else {
      throw "Something went wrong";
    }
  }
};