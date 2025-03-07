// src/api.js
function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ status: 200, body: 'success' });
      } else {
        reject(new Error('The API is not working'));
      }
    });
  }
  
  module.exports = getFullResponseFromAPI;
  