const axios = require('axios');
const API_SERVICE_URL = 'https://www.metaweather.com';

const searchByLocation = async (searchText) => {
  return await axios({
    method: 'GET',
    url: `${API_SERVICE_URL}/api/location/search/?query=${searchText}`,
  });
};

const getWeatherInfo = async (woeid) => {
  return await axios({
    method: 'GET',
    url: `${API_SERVICE_URL}/api/location/${woeid}`,
  });
};

module.exports = {
  searchByLocation,
  getWeatherInfo,
};
