import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3000;

// Middleware to log request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// MongoDB connection setup
const uri = 'mongodb://localhost:27017'; // or use MongoDB Atlas URI
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB successfully!');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err);
  }
}

connectToMongoDB();

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Middleware & MongoDB Assignment!');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong! Try again later.' });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
