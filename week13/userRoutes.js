import express from 'express';
const router = express.Router();

// Dynamic user route
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

export default router;
