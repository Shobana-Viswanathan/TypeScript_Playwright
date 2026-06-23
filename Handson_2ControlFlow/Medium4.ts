let total: number = 240;
let deer: number = 27;
let rabbits: number = 48;
let birds: number = 124;
let squirrels: number = 38;

let sum = deer + rabbits + birds + squirrels;

if (sum < total) {
    console.log("Baby lion is mischievous");
} 
else if (sum === total) {
    console.log("Baby lion is well behaved");
} 
else {
    console.log("Counted wrongly");
}