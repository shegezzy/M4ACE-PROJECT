import http from 'http';
import { handleRoute } from './routes/router.js';

const PORT = 3000;

const server = http.createServer((req, res) => {
  handleRoute(req, res);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
