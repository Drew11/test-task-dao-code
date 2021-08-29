import React, { useState, useEffect } from 'react';
import Weather from '../Weather/Weather';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';
import { ApiService } from '../../api/index';
import './App.css';

function App() {

  const service = new ApiService();
  const [weather, setWeather] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function success(position) {
        setLoading(true)
        service.getWeather(position.coords).then(data => {
            setWeather(data);
            setTemperature(data.main.temp);
            setLoading(false);
        });
      },
      function error(error) {
        setError(error.message)
        setLoading(false)
      });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setLoading(true)
      service.getWeatherByQuery(searchQuery)
        .then(data => {
          setWeather(data);
          setTemperature(data.main.temp);
          setError(null);
          setLoading(false);
        })
        .catch(err => {
          setWeather(null);
          setError(err)
          setLoading(false)
        });
    }
  }, [searchQuery, error]);

  const errorView = error && !loading && <Error error={error} />;
  const weatherView = weather && !loading && <Weather weather={weather} temperature={temperature} />;
  const spinnerView = loading && <Spinner />;
  const sliderView =  weather && !loading && <Slider temperature={temperature} setTemperature={setTemperature}/>;

  return (
    <div className="App">
      <header className="header">
        Weather app
      </header>
      <main className="main">
        <div>
          <h1>Weather in your city</h1>
        </div>
        <Search
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
        {weatherView}
        {errorView}
        {spinnerView}
        {sliderView}
      </main>
      <footer className="footer">
      </footer>
    </div>
  );
}

export default App;
