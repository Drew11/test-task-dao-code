import React from 'react';
import './Weather.css';
import Temperature from '../Temperature/Temperature';

function Weather({ weather, temperature }) {

    const srcWeatherIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
    const srcCountryIcon = `https://openweathermap.org/images/flags/${weather.sys.country.toLocaleLowerCase()}.png`;

    return (
        <div className="weather-view">
            <div className="weather">
                <div className="weather-icon">
                    <img
                        src={srcWeatherIcon}
                        alt="weather-icon"
                    />
                </div>

                <div className="weather-content">
                    <div>
                        <span className="weather-city">
                            {weather.name + ', '}
                        </span>
                        <span className="weather-country">
                            {weather.sys.country}
                        </span>
                        <img
                            className="weather-country-flag"
                            src={srcCountryIcon}
                            alt="country-flag"
                        />
                        <span className="weather-description">
                            {weather.weather[0].description}
                        </span>
                    </div>

                    <Temperature
                        temp={temperature}
                        tempMin={weather.main.temp_min}
                        tempMax={weather.main.temp_max}
                        humidity={weather.main.humidity}
                        wind={weather.wind.speed}
                        clouds={weather.clouds.all}
                    />
                    <div className="coords">Geo coords:
                        <span>[{weather.coord.lat}, {weather.coord.lon}]</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Weather;