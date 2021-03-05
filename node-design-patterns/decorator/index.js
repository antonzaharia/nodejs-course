const Shopper = require("./Shopper");
const { InventoryItem, GoldenInventoryItem } = require("./InventoryItem");

const alex = new Shopper("Alex", 4000);

const necklace = new InventoryItem("Necklace", 9.99);
const gold_necklace = new GoldenInventoryItem(necklace);

alex.purchase(gold_necklace);

alex.printStatus();
