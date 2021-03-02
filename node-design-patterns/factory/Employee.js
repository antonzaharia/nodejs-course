class Employee {
  constructor(name, money, employer) {
    this.name = name;
    this.money = money;
    this.employer = employer;
  }
  print() {
    return `${this.name}: ${this.money} hired by ${this.employer}`;
  }
  payDay(amount) {
    this.money += amount;
  }
}
module.exports = Employee;
