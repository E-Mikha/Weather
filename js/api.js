export const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2860e50e7e7d52caf1cff1cf3f00f75&lang=en&units=metric`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
