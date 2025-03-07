// src/index.js
const getFullResponseFromAPI = require('./api');
const logSystemInfo = require('./systemInfo');

// Print message
console.log('Hello from Node.js!');

// Log system info
logSystemInfo();

// Test API response
getFullResponseFromAPI(true)
  .then(response => console.log('API Response:', response))
  .catch(error => console.error('API Error:', error.message));
