import * as fs from "fs";

const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let index = 14;
let totalPrice: number = 0;
let choice: string = "yes";
let itemNumber: number = 1;

while (choice.toLowerCase() === "yes") {

    let price: number = Number(lines[index++]);
    let quantity: number = Number(lines[index++]);

    totalPrice += price * quantity;

    choice = lines[index++] ?? "no";

    itemNumber++;
}

console.log("Total Price: " + totalPrice);