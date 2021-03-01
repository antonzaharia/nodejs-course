const logger = require("./logger");

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    logger.log(`Name Store: ${name} has ${inventory.length} items in stock.`);
  }
}

module.exports = Store;
