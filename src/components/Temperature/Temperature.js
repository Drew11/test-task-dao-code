import React from 'react';
import { formatTemperature, getStatusTemperature } from '../../helpers/utils';

import './Temperature.css';

function Temperature(props) {
  const {
    temp, 
    tempMax, 
    tempMin, 
    humidity, 
    wind,
    clouds
  } 
  = props;
  return (
    <div className="temperature-view">
      <div >
          <span className="temperature" data-status={getStatusTemperature(temp)}>
            {formatTemperature(temp)}
          </span>
          <span>
            temperature from {tempMin} to {tempMax} °С,
            humidity {humidity} wind, {wind} m/s. clouds {clouds}%
          </span>
      </div>
    </div>
  );
}

export default Temperature;