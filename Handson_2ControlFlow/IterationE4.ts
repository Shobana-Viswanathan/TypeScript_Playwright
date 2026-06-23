let playnum: number = 4;

let sum = 0;
let output = "";

for (let i = playnum; i >= 1; i--) {
    output += i + " ";
    sum += i;
}

console.log(output + " , " + sum);