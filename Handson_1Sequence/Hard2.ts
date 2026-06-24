import * as fs from "fs";

const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let price: number = Number(lines[8]);
let quantity: number = Number(lines[9]);
let totalCost: number = price * quantity;
console.log("Total cost: $" + totalCost.toFixed(2));