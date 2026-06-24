let num1 = "5672";
let even_sum = 0;
let odd_sum = 0;
for (let char of num1) {
    let digit = Number(char);
    if (digit % 2 === 0) {
        even_sum += digit;
    }
    else {
        odd_sum += digit;
    }
}
console.log(even_sum + " " + odd_sum);
export {};
//# sourceMappingURL=IterationM5.js.map