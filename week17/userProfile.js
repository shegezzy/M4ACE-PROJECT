import { createClient } from 'redis';

const client = createClient();

await client.connect();

await client.hSet('user:1001', {
  name: 'Olusegun Akinnola',
  email: 'olusegun@example.com',
  age: '25'
});

const user = await client.hGetAll('user:1001');
console.log('User profile:', user);

await client.quit();
