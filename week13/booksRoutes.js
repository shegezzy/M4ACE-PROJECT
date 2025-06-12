import express from 'express';
const router = express.Router();

const books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
  { id: 3, title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' }
];

router.get('/', (req, res) => {
  res.json(books);
});

export default router;
