import { createClient } from 'redis';

const subscriber = createClient();
await subscriber.connect();

await subscriber.subscribe('notifications', (message) => {
  console.log('📬 New message received:', message);
});
