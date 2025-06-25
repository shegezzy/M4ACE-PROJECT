// week16/cacheRoute.js
import express from 'express';
import axios from 'axios';
import client from './redisClient.js';

const router = express.Router();

router.get('/data', async (req, res) => {
  try {
    const cacheKey = 'mock:data';

    const cachedData = await client.get(cacheKey);

    if (cachedData) {
      console.log('🔁 Data from Redis');
      return res.json(JSON.parse(cachedData));
    }

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    await client.setEx(cacheKey, 60, JSON.stringify(response.data));
    console.log('🆕 Data from API');

    res.json(response.data);
  } catch (err) {
    console.error('❌ Error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
