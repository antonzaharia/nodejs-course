const fs = require("fs");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

const beep = console.log("beep!");

const delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });

const dooStuffSequentially = () =>
  Promise.resolve()
    .then(() => console.log("starting..."))
    .then(() => delay(1))
    .then(() => "waiting...")
    .then(console.log)
    .then(() => delay(2))
    .then(() => writeFile("file.txt", "Sample file..."))
    .then(beep)
    .then(() => "file.txt created")
    .then(console.log)
    .then(() => delay(3))
    .then(() => unlink("file.txt"))
    .then(beep)
    .then(() => "file.txt deleted")
    .then(console.log)
    .catch(console.error);
dooStuffSequentially();
