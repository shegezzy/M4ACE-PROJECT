import { createClient } from 'redis';

const publisher = createClient();
await publisher.connect();

await publisher.publish('notifications', '📢 New event happening soon!');
console.log('Message published!');

await publisher.quit();
