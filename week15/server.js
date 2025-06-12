// server.js
import express from 'express';
import { connectToDatabase } from './db.js';
import usersRoutes from './routes/users.js';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the MongoDB CRUD App!');
});

// Start server
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
});