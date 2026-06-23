"use strict";
let income = 800000;
let tax = 0;
if (income < 250000) {
    console.log("You are exempted from tax");
}
else if (income <= 500000) {
    tax = income * 0.10;
    console.log("Tax amount is " + tax);
}
else if (income <= 1200000) {
    tax = income * 0.20;
    console.log("Tax amount is " + tax);
}
else {
    tax = income * 0.30;
    console.log("Tax amount is " + tax);
}
