const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./sample_mp4.mp4");
const writeStream = createWriteStream("./copy.mp4");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});
readStream.on("error", (error) => {
  console.log("error:", error.message);
});
readStream.on("end", () => {
  writeStream.end();
});

writeStream.on("close", () => {
  process.stdout.write("file copied \n");
});
