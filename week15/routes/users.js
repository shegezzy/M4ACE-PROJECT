// routes/users.js
import express from 'express';
import { getDb } from '../db.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  try {
    const db = getDb();
    const users = await db.collection('users').find().toArray();
    res.json(users);
  } catch (err) {
    console.error('❌ Failed to fetch users:', err.message);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// POST create new user
router.post('/', async (req, res) => {
  try {
    const db = getDb();
    const { name, email } = req.body;
    const result = await db.collection('users').insertOne({ name, email });
    res.status(201).json({ message: 'User added', id: result.insertedId });
  } catch (err) {
    console.error('❌ Failed to add user:', err.message);
    res.status(500).json({ error: 'Failed to add user' });
  }
});

// PUT update user
router.put('/:id', async (req, res) => {
  try {
    const db = getDb();
    const userId = req.params.id;
    const { name, email } = req.body;

    const result = await db.collection('users').updateOne(
      { _id: new ObjectId(userId) },
      { $set: { name, email } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User updated' });
  } catch (err) {
    console.error('❌ Failed to update user:', err.message);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// DELETE remove user
router.delete('/:id', async (req, res) => {
  try {
    const db = getDb();
    const userId = req.params.id;

    const result = await db.collection('users').deleteOne({
      _id: new ObjectId(userId),
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted' });
  } catch (err) {
    console.error('❌ Failed to delete user:', err.message);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

export default router;