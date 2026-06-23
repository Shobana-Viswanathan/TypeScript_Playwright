import promptSync from "prompt-sync";
const prompt = promptSync();
let birthyear: number = Number(prompt("Enter your birth year: "));
let currentyear: number = new Date().getFullYear();
let age: number = currentyear - birthyear;
console.log("Your age is: "+age+ "years");

