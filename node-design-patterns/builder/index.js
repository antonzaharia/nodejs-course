const PersonBuilder = require("./PersonBuilder");

const sue = new PersonBuilder("Sue").makeEmployee().makeManager(60).build();
const bill = new PersonBuilder("Bill").makeEmployee().makePartTime().build();
const phil = new PersonBuilder("Phil").makeEmployee().build();

const charles = new PersonBuilder("Charles")
  .withMoney("500")
  .withList(["jeans", "sunglasses"])
  .build();
const tabitha = new PersonBuilder("Tabitha").withMoney(1000).build();
