const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./sample_mp4.mp4");
const writeStream = createWriteStream("./copy.mp4", { highWaterMark: 162890 });

readStream.on("data", (chunk) => {
  const result = writeStream.write(chunk);
  if (!result) {
    console.log("back pressure!");
    readStream.pause();
  }
});
readStream.on("error", (error) => {
  console.log("error:", error.message);
});
readStream.on("end", () => {
  writeStream.end();
});

writeStream.on("drain", () => {
  console.log("drainer");
  readStream.resume();
});

writeStream.on("close", () => {
  process.stdout.write("file copied \n");
});
