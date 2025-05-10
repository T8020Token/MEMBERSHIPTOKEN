import axios from 'axios';

export default async function handler(req, res) {
  const { userId } = req.body;
  const token = req.headers.authorization?.split('Bearer ')[1];

  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/subscription/create-checkout-session`,
      { userId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
}