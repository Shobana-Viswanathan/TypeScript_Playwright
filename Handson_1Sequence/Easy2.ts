import PromptSync from "prompt-sync";
const prompt=PromptSync()
let r:number = Number(prompt("Enter radius:"))
const pi:number=3.14
let area:number = pi*r*r
console.log(area)
