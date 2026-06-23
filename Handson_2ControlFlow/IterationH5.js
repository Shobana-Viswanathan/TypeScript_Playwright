"use strict";
let primefactn = 315;
let factor = 2;
let out = "";
while (primefactn > 1) {
    while (primefactn % factor == 0) {
        out += factor + " ";
        primefactn = primefactn / factor;
    }
    factor++;
}
console.log(out);
