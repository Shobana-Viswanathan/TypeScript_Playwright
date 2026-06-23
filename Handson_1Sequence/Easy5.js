import promptSync from "prompt-sync";
const prompt = promptSync();
let birthyear = Number(prompt("Enter your birth year: "));
let currentyear = new Date().getFullYear();
let age = currentyear - birthyear;
console.log("Your age is: " + age + "years");
