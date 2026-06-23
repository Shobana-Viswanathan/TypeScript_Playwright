import promptSync from "prompt-sync";
const prompt = promptSync();
let n1: number = Number(prompt("Enter first num: "));
let n2: number =Number(prompt("Enter second num: "));
let sum:number = n1+n2;
console.log("The sum of " + n1 + " and " + n2 + " is: " + sum);