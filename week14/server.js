import express from 'express';

const app = express();
const port = 3000;

// Logging middleware: logs method and URL of each request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route for testing
app.get('/', (req, res) => {
  res.send('Hello from Week 14 middleware!');
});

// Route to deliberately trigger an error
app.get('/error', (req, res, next) => {
  const err = new Error('This is a custom error!');
  next(err); // Pass error to error-handling middleware
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
