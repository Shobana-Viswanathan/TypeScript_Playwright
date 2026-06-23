"use strict";
let num = 61987;
let str = String(num);
if (str.length === 5) {
    console.log(str.split("").reverse().join(""));
}
else {
    console.log("Not a valid number");
}
