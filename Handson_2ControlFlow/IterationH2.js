let no = "1634";
let numLen = no.length;
let total = 0;
for (let char of no) {
    let digit = Number(char);
    total += Math.pow(digit, numLen);
}
if (total === Number(no)) {
    console.log(true);
}
else {
    console.log(false);
}
export {};
//# sourceMappingURL=IterationH2.js.map