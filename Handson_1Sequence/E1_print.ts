import * as fs from "fs";

const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let name: string = lines[0] ?? "";
let age: number = Number(lines[1]);
let color: string = lines[2] ?? "";

console.log("Name:", name);
console.log("Age:", age);
console.log("Favorite color:", color);