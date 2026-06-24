import * as fs from "fs";

const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let quantitiesInput: string = lines[12] ?? "";
let pricesInput: string = lines[13] ?? "";
let quantities = quantitiesInput.split(",");
let prices = pricesInput.split(",");
let totalValue: number = 0;

for (let i = 0; i < quantities.length; i++) {
    totalValue += Number(quantities[i]) * Number(prices[i]);
}
console.log("Total value of the inventory: " + totalValue.toFixed(2));