import promptSync from "prompt-sync";
const prompt = promptSync();
let username = prompt("Enter your name:");
console.log("Hello, " + username + "!");
