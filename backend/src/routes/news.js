const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:city', async (req, res) => {
const { city } = req.params;
try {
const response = await axios.get('https://newsapi.org/v2/everything', {
params: {
q: city,
apiKey: process.env.NEWS_API_KEY,
},
});
const articles = response.data.articles.map((article) => ({
id: article.url,
title: article.title,
content: article.description,
source: article.url,
date: article.publishedAt,
}));
res.json(articles);
} catch (error) {
res.status(500).json({ error: 'Failed to fetch news' });
}
});

module.exports = router;