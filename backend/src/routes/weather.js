const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:city', async (req, res) => {
const { city } = req.params;
try {
const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
params: {
q: city,
appid: process.env.OPENWEATHER_API_KEY,
units: 'metric',
},
});
res.json({
temp: response.data.main.temp,
condition: response.data.weather[0].description,
});
} catch (error) {
res.status(500).json({ error: 'Failed to fetch weather' });
}
});

module.exports = router;