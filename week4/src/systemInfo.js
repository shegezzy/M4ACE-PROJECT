// src/systemInfo.js
const os = require('os');

function logSystemInfo() {
  console.log('Platform:', os.platform());
  console.log('Architecture:', os.arch());
  console.log('Total Memory:', os.totalmem() / (1024 * 1024), 'MB');
  console.log('Free Memory:', os.freemem() / (1024 * 1024), 'MB');
  console.log('Uptime:', os.uptime(), 'seconds');
}

module.exports = logSystemInfo;
