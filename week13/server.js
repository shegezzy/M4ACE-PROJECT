import express from 'express';
import userRoutes from './userRoutes.js';     // 👈 add ./ to fix path
import searchRoutes from './searchRoutes.js'; // 👈 same here

const app = express();
const port = 3000;

app.use('/', (req, res) => {
  res.send('Welcome to the Express Routing App!');
});

app.use('/user', userRoutes);
app.use('/search', searchRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
