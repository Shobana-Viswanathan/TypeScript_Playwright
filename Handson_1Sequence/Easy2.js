import PromptSync from "prompt-sync";
const prompt = PromptSync();
let r = Number(prompt("Enter radius:"));
const pi = 3.14;
let area = pi * r * r;
console.log(area);
