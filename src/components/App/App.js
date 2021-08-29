import React, { useState, useEffect } from 'react';
import Weather from '../Weather/Weather';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';
import { ApiService } from '../../api/index';
import { formatTemperature } from '../../helpers/utils';
import './App.css';

function App() {

  const service = new ApiService();
  const [weather, setWeather] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const onError = (error) => {
    setError(error);
    setLoading(false);
    setWeather(null);
  };

  const onFetch = (fn, params) => {
       setLoading(true);
       fn(params).then(data => {
          setWeather(data);
          setTemperature(formatTemperature(data.main.temp));
          setLoading(false);
          setError(null);
        })
        .catch(error => {
          onError(error);
        });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function success(position) {
        onFetch(service.getWeatherByCoords, position.coords);
      },
      function error(error) {
        onError(error.message);
      });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      onFetch(service.getWeatherByQuery, searchQuery);
    }
  }, [searchQuery]);

  const errorView = error && !loading && <Error error={error} />;
  const weatherView = weather && !loading && <Weather weather={weather} temperature={temperature} />;
  const sliderView = weather && !loading && <Slider temperature={temperature} setTemperature={setTemperature} />;
  const spinnerView = loading && <Spinner />;
  
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
