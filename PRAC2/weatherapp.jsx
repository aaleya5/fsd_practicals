const Prac2 = () => {
  const cities = [
    { city: "Vadodara", temp: 49 },
    { city: 'Mumbai', temp: '31°C' },
    { city: 'Delhi', temp: '25°C' },
    { city: 'Bangalore', temp: '22°C' },
    { city: 'Kolkata', temp: '29°C' },
    { city: 'Chennai', temp: '34°C' }
  ]);
  const [cityInput, setCityInput] = useState('');

  const [weatherResult, setWeatherResult] = useState(null);

  const handleInputChange = (event) => {
    setCityInput(event.target.value);
  };

  const handleSearch = () => {
    const foundCity = cities.find(c => 
      c.city.toLowerCase() === cityInput.toLowerCase()
    );

    setWeatherResult(foundCity);
  };

  return (
    <>
      <h1>Weather App</h1>

      Enter city : <input type="text" value={cityInput} onChange={handleInputChange} /> <br />
      <button onClick={handleSearch}>Click here to get weather</button>

      {weatherResult ? (
        <div>
          <h2>Weather in {weatherResult.city}</h2>
          <p>Temperature: {weatherResult.temp}</p>
        </div>
      ) : (
        cityInput && <div>City not found. Please try again.</div>
      )}
    </>
  );
};

export default Prac2;
