let x: number = 220;
let y: number = 284;

let sum_x = 0;
let sum_y = 0;

for (let i = 1; i < x; i++) {
    if (x % i === 0) {
        sum_x += i;
    }
}

for (let i = 1; i < y; i++) {
    if (y % i === 0) {
        sum_y += i;
    }
}

if (sum_x === y && sum_y === x) {
    console.log("Amicable Pair");
} else {
    console.log("Not an Amicable pair");
}