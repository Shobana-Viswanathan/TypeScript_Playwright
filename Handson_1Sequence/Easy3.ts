import * as fs from "fs";

const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let first: number = Number(lines[4]);
let second: number = Number(lines[5]);
let sum: number = first + second;

console.log("The sum of " + first + " and " + second + " is: " + sum);