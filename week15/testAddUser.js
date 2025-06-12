// testAddUser.js
import { connectToDatabase, getDb } from './db.js';

const addUser = async () => {
  await connectToDatabase();
  const db = getDb();

  try {
    const result = await db.collection('users').insertOne({
      name: 'Olusegun Akinnola',
      email: 'segunakinnola@gmail.com',
    });
    console.log('✅ User added:', result.insertedId);
  } catch (err) {
    console.error('❌ Failed to add user:', err.message);
  } finally {
    process.exit(0);
  }
};

addUser();