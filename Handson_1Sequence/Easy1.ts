import promptSync from "prompt-sync";
const prompt = promptSync();
let uname: String = prompt("Enter your name: ");
let age: number = Number(prompt("Enter age: "));
let color: String=prompt("Enter the color:");
console.log("Name:", uname);
console.log("Age:", age);
console.log("Favorite color:",color);
