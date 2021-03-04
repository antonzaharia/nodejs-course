const Store = require("./Store");
const inventory = require("./inventory");

const skiShop = new Store("Steep and Deep", inventory);

const searchItem = "wax";
const result = skiShop.find(searchItem);

console.log(result);
