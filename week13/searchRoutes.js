import express from 'express';
const router = express.Router();

// Search route using query string
router.get('/', (req, res) => {
  const query = req.query.q;
  if (query) {
    res.send(`Search results for: ${query}`);
  } else {
    res.send('No search query provided.');
  }
});

export default router;
