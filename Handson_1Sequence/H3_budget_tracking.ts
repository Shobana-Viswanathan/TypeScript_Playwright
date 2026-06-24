import * as fs from "fs";

const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let income: number = Number(lines[10] ?? "0");
let expensesInput: string = lines[11] ?? "";
let expenses = expensesInput.split(" ");
let total: number = 0;

for (let i = 0; i < expenses.length; i++) {
    total += Number(expenses[i]);
}
let remainingBudget: number = income - total;
console.log("Remaining budget: $" + remainingBudget.toFixed(2));