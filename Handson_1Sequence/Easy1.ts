import fs from "fs";
const inputs = fs.readFileSync(0, 'utf8')
    .trim()
    .split(/\r?\n/);

let index = 0;


let uname: String = Number(inputs[index++]);
let age: number = Number(inputs[index++]);
let color: String=Number(inputs[index++]);
console.log("Name:", uname);
console.log("Age:", age);
console.log("Favorite color:",color);
