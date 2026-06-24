let strname = "Smith";
let item = 40;
let total = 0;
if (item < 0) {
    console.log("Invalid input");
}
else if (item < 10) {
    total = item * 12;
}
else if (item <= 99) {
    total = item * 10;
}
else {
    total = item * 7;
}
if (item >= 0) {
    console.log(strname + " " + total);
}
export {};
//# sourceMappingURL=Medium5.js.map