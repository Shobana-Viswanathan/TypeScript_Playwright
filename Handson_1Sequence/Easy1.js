import promptSync from "prompt-sync";
const prompt = promptSync();
let uname = prompt("Enter your name: ");
let age = Number(prompt("Enter age: "));
let color = prompt("Enter the color:");
console.log("Name:", uname);
console.log("Age:", age);
console.log("Favorite color:", color);
