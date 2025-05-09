const express = require('express');
const admin = require('firebase-admin');
const router = express.Router();

router.post('/signup', async (req, res) => {
const { email, password } = req.body;
try {
const user = await admin.auth().createUser({ email, password });
await admin.firestore().collection('users').doc(user.uid).set({
email,
isSubscribed: false,
createdAt: admin.firestore.FieldValue.serverTimestamp(),
});
res.status(201).json({ user: { uid: user.uid, email } });
} catch (error) {
res.status(400).json({ error: error.message });
}
});

router.post('/login', async (req, res) => {
res.status(200).json({ message: 'Login handled by Firebase client' });
});

module.exports = router;