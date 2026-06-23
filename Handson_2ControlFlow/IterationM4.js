"use strict";
let primen = 10;
for (let num = 2; num <= primen; num++) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        console.log(num + " ");
    }
}
