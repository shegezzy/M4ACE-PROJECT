// testMongo.js
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

// Load environment variables
dotenv.config();

// Debug log to check if the URI is loaded correctly
console.log('🔐 MONGO_URI:', process.env.MONGO_URI);

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB successfully!');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
  } finally {
    await client.close();
  }
}

connectToMongoDB();
