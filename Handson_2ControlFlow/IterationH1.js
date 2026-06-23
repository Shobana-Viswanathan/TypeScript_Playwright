"use strict";
let start = 11;
let end = 40;
let outputs = "";
for (let i = start; i <= end; i++) {
    if (i % 10 === 0) {
        outputs += "dong ";
    }
    else if (i % 5 === 0) {
        outputs += "ding ";
    }
    else {
        outputs += i + " ";
    }
}
console.log(outputs);
