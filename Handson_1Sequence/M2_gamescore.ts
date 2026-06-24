import * as fs from "fs";

const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);
let score = lines[500];
console.log("Your score is " + score + ".");