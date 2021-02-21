const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Alex \n");
questionApp.stdin.write("London \n");
questionApp.stdin.write("CHange the world \n");

questionApp.stdout.on("data", (data) => {
  console.log(`from the questions app: ${data}`);
});
questionApp.stdout.on("close", () => {
  console.log("questionApp process exited");
});
