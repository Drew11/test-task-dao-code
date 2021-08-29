import axios from 'axios';

const openWeatherApiKey = 'cee8cad0d1dbcd913809dee4f4f8ba29';

export class ApiService {
  _baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

  _getWeatherRequestUrl({ latitude, longitude }) {
    return `${this._baseUrl}?lat=${latitude}&lon=${longitude}&units=metric&appid=${openWeatherApiKey}`;
  }

  async getData(url) {
    try {
        const response =  await axios.get(url);
        return response.data;
    } catch (err) {
        throw err.response.data.message;
    }
  }

  getWeatherByQuery = async (query) => {
    const url = `${this._baseUrl}?q=${query}&units=metric&appid=${openWeatherApiKey}`;
    return await this.getData(url);
  }

  getWeatherByCoords = async (coords)  => {
    return await this.getData(this._getWeatherRequestUrl(coords));
  }
}
