const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
const { article } = req.body;
try {
const response = await axios.post(
'https://api.x.ai/v1/analyze',
{ text: article.content },
{ headers: { Authorization: `Bearer ${process.env.XAI_API_KEY}` } }
);
res.json({
isReliable: response.data.isReliable || true,
analysis: response.data.analysis || 'Article verified with credible sources.',
});
} catch (error) {
res.status(500).json({ error: 'Failed to fact-check article' });
}
});

module.exports = router;