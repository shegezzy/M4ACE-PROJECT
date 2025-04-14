// readFile.js
import { readFile } from 'fs/promises';

const filePath = 'hello.txt';

try {
  const data = await readFile(filePath, 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}

