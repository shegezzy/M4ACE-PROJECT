import express from 'express';
import axios from 'axios';
import { client } from './redisClient.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Route to fetch and cache mock API data
app.get('/data', async (req, res) => {
  const cacheKey = 'mockData';

  try {
    const cached = await client.get(cacheKey);

    if (cached) {
      console.log('🔁 Serving from Redis Cache');
      return res.json(JSON.parse(cached));
    }

    console.log('📡 Fetching from mock API...');
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // Cache the response in Redis
    await client.set(cacheKey, JSON.stringify(response.data), {
      EX: 30, // expires in 30 seconds
    });

    res.json(response.data);
  } catch (err) {
    console.error('❌ Error fetching data:', err.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
