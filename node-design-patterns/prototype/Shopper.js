const logger = require("./logger");

class Shopper {
  constructor(name, money = 0) {
    this.name = name;
    this.money = money;
    this.list = [];
    logger.log(`New Shopper: ${name} has ${money} in their account.`);
  }
  shoppingList = () => {
    return this.list;
  };
  addItemToList = (item) => {
    this.list.push(item);
    logger.log(`Item added: ${this.list}`);
  };
}

module.exports = Shopper;
