class Shopper {
  constructor(name, money = 0) {
    this.name = name;
    this.money = money;
  }
  print() {
    return `${this.name}: ${this.money}`;
  }
}
module.exports = Shopper;
