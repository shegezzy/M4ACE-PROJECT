import express from 'express';
import userRoutes from './userRoutes.js';
import searchRoutes from './searchRoutes.js';
import booksRoutes from './booksRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Express Routing App!');
});

app.use('/user', userRoutes);
app.use('/search', searchRoutes);
app.use('/books', booksRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
