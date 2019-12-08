// const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

fetchCoordsByIP('24.86.85.102', (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  
  console.log('It worked! Returned Coords:', coords);
});