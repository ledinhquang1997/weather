const path = require('path');

var cors = require('cors');
const express = require('express');

const { searchByLocation, getWeatherInfo } = require('./request');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get('/info', (req, res) => {
  res.send('This is a proxy service which proxies to Meta Weather API');
});

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.use('/search', async (req, res) => {
  const searchText = req.query.searchText;

  try {
    const location = await searchByLocation(searchText);
    const woeid = location?.data[0]?.woeid;
    const weather = await getWeatherInfo(woeid);

    res.json({ weather: weather.data.consolidated_weather, city: location?.data[0] });
  } catch (err) {
    res.status(404);
    res.json({
      error: 'Not found',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Starting proxy at ${PORT}`);
});
