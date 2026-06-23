import fs from "fs";
const inputs = fs.readFileSync(0, 'utf8')
    .trim()
    .split(/\r?\n/);
let index = 0;
let uname = Number(inputs[index++]);
let age = Number(inputs[index++]);
let color = Number(inputs[index++]);
console.log("Name:", uname);
console.log("Age:", age);
console.log("Favorite color:", color);
