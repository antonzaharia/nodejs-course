const Logger = require("./logger");
const logger = new Logger().getInstance();

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    logger.log(`Name Store: ${name} has ${inventory.length} items in stock.`);
  }
}

module.exports = Store;
