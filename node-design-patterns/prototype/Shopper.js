const logger = require("./logger");

class Shopper {
  constructor(name = "unnamed person", money = 0) {
    this._name = name;
    this._list = [];
    logger.log(`New Shopper: ${name} has been created.`);
  }
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
  get shoppingList() {
    return this._list.join(", ");
  }
  addItemToList(item) {
    this._list.push(item);
    logger.log(`Item added: ${this._list}`);
  }
  clone() {
    const proto = Object.getPrototypeOf(this);
    const cloned = Object.create(proto);

    cloned._name = this._name;
    cloned._list = [...this._list];

    return cloned;
  }
}

module.exports = Shopper;
