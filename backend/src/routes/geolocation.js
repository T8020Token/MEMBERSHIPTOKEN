const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
const { lat, lon } = req.query;
try {
const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
params: {
lat,
lon,
format: 'json',
},
headers: {
'User-Agent': 'T8020News/1.0',
},
});
const city = response.data.address.city || response.data.address.town || 'Unknown';
res.json({ city });
} catch (error) {
res.status(500).json({ error: 'Failed to fetch city' });
}
});

module.exports = router;