// Define a function fetchMyIP which will asynchronously 
// return our IP Address using an API

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 * - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 * - An error, if any (nullable)
 * - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');

// const fetchMyIP = function(callback) {
//   // use request to fetch IP address from JSON API
//   request('https://api.ipify.org/?format=json', (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }

//     if (response.statusCode !== 200) {
//       const msg = `Status code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }

//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// };

// const fetchCoordsByIP = function(ip, callback) {
//   request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {
//   if (error) {
//     callback(error, null);
//     return;
//   }
//   if (response.statusCode !== 200) {
//     const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response ${body}`;
//     callback(Error(msg), null);
//     return;
//   }
//   const { latitude, longitude } = JSON.parse(body).data;
//   callback(null, { latitude, longitude });
//   });
// }

const fetchISSFlyOverTimes = function(coords, callback) {
  const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;
  
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
      return;
    }

    const passes = JSON.parse(body).response;
    callback(null, passes);
  });
};

// module.exports = { fetchMyIP };

// module.exports = { fetchCoordsByIP };

module.exports = { fetchISSFlyOverTimes };