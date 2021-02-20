const fs = require("fs");

// fs.renameSync("./assets/colors.json", "./assets/colorData.json");

// fs.rename("./assets/notes.md", "storage-files/notes.md", (err) => {
//   if (err) {
//     throw err;
//   }
// });

// setTimeout(() => {
//   fs.unlinkSync("./assets/alex.jpg");
// }, 4000);

fs.readdirSync("./storage-files").forEach((fileName) => {
  fs.unlinkSync(`./storage/${fileName}`);
});

fs.rmdir("./storage-files", (err) => {
  if (err) {
    throw err;
  }
  console.log("./storage directory removed");
});
