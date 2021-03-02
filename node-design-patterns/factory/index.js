const userFactory = require("./userFactory");

const alex = userFactory("Alex Banks", 100);
const eve = userFactory("Eve Smit", 100, "employee", "This and That");

eve.payDay(100);

console.log(alex.print());
console.log(eve.print());
