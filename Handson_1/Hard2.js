import promptSync from "prompt-sync";
const prompt = promptSync();
let price = Number(prompt("Enter the price of the item: "));
let quantity = Number(prompt("Enter the quantity: "));
let totalCost = price * quantity;
console.log("Total cost: $" + totalCost.toFixed(2));
