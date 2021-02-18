const collectAnswers = require("./lib/collectAnswers.js");
const questions = [
  "What is your name? ",
  "Where do you live? ",
  "Where are you going to do with node js? ",
];

collectAnswers(questions, (answers) => {
  console.log(" Thank you for your answers.");
  console.log(answers);
  process.exit();
});
