const express = require('express');
const admin = require('firebase-admin');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const newsRoutes = require('./routes/news');
const weatherRoutes = require('./routes/weather');
const geolocationRoutes = require('./routes/geolocation');
const subscriptionRoutes = require('./routes/subscription');
const factcheckRoutes = require('./routes/factcheck');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();
const app = express();
app.use(express.json());

// Initialize Firebase Admin
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/news', authMiddleware, newsRoutes);
app.use('/api/weather', authMiddleware, weatherRoutes);
app.use('/api/geolocation', authMiddleware, geolocationRoutes);
app.use('/api/subscription', authMiddleware, subscriptionRoutes);
app.use('/api/factcheck', authMiddleware, factcheckRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;