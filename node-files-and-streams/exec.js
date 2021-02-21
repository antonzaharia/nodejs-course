const cp = require("child_process");

cp.exec("node readStream", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
