const fs = require("fs");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const readdir = promisify(fs.readdir);
const beep = () => console.log("beep!");
const delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });
Promise.race([
  writeFile("readme.me", "Hello World"),
  writeFile("readme.txt", "Hello World"),
  writeFile("readme.json", '{"hello": "world"}'),
])
  .then(() => readdir(__dirname))
  .then(console.log);
