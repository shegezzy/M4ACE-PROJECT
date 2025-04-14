// writeFile.js
import { writeFile } from 'fs/promises';

const filePath = 'hello.txt';
const content = 'Hello, File System!';

try {
  await writeFile(filePath, content);
  console.log(`File written successfully to ${filePath}`);
} catch (err) {
  console.error('Error writing to file:', err);
}
