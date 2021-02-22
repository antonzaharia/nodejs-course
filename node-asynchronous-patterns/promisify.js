const { promisify } = require("util");
const fs = require("fs");

const writeFile = promisify(fs.writeFile);

writeFile("sample.txt", "This is a sample")
  .then(() => console.log("file successfully created"))
  .catch((error) => console.log("error creating file"));

// const delay = (seconds, callback) => {
//   if (seconds > 3) {
//     callback(new Error(`${seconds} seconds is too long!`));
//   } else {
//     setTimeout(() => {
//       callback(null, `the ${seconds} second delay is over.`);
//     });
//   }
// };

// var promiseDelay = promisify(delay);

// promiseDelay(4)
//   .then(console.log)
//   .catch((err) => console.log(`error: ${err.message}`));
