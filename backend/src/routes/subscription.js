const express = require('express');
const Stripe = require('stripe');
const admin = require('firebase-admin');
const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-checkout-session', async (req, res) => {
const { userId } = req.body;
try {
const session = await stripe.checkout.sessions.create({
payment_method_types: ['card'],
line_items: [
{
price: process.env.STRIPE_PRICE_ID,
quantity: 1,
},
],
mode: 'subscription',
success_url: `${process.env.FRONTEND_URL}/?success=true`,
cancel_url: `${process.env.FRONTEND_URL}/?canceled=true`,
metadata: { userId },
});
res.json({ url: session.url });
} catch (error) {
res.status(500).json({ error: 'Failed to create checkout session' });
}
});

router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
const sig = req.headers['stripe-signature'];
let event;

try {
event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
} catch (err) {
return res.status(400).send(`Webhook Error: ${err.message}`);
}

if (event.type === 'customer.subscription.created' || event.type === 'customer.subscription.updated') {
const subscription = event.data.object;
const userId = subscription.metadata.userId;
await admin.firestore().collection('users').doc(userId).update({
isSubscribed: true,
subscriptionId: subscription.id,
});
} else if (event.type === 'customer.subscription.deleted') {
const subscription = event.data.object;
const userId = subscription.metadata.userId;
await admin.firestore().collection('users').doc(userId).update({
isSubscribed: false,
subscriptionId: null,
});
}

res.json({ received: true });
});

module.exports = router;