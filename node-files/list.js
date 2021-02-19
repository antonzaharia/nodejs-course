const fs = require("fs");

console.log("Start reading files...");
fs.readdir("./assets", (err, files) => {
  if (err) {
    throw err;
  }
  console.log("Complete!");
  console.log(files);
});
