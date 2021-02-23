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
const returnFiles = async () => {
  let files = await readdir(__dirname);
  if (files.includes("file.txt")) {
    console.log("file.txt found");
  } else {
    console.log("file.txt not found");
  }
};

const dooStuffSequentially = async () => {
  console.log("starting");
  await delay(1);
  console.log("waiting");
  await delay(2);
  try {
    await writeFile("file.txt", "Sample text.");
    beep();
  } catch (error) {
    console.log(error);
  }
  console.log("file.txt created");
  console.log("checking the file created");
  await delay(3);
  returnFiles();
  await delay(4);
  await unlink("file.txt");
  beep();
  console.log("file.txt deleted");
  console.log("checking if the file was deleted");
  await delay(5);
  returnFiles();
  beep();

  return Promise.resolve();
};
// .then(() => console.log("starting..."))
// .then(() => delay(1))
// .then(() => "waiting...")
// .then(console.log)
// .then(() => delay(2))
// .then(() => writeFile("file.txt", "Sample file..."))
// .then(beep)
// .then(() => "file.txt created")
// .then(console.log)
// .then(() => delay(3))
// .then(() => unlink("file.txt"))
// .then(beep)
// .then(() => "file.txt deleted")
// .then(console.log)
// .catch(console.error);
dooStuffSequentially();
