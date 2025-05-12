// Import Express
import express from 'express';

// Create an Express app
const app = express();

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
