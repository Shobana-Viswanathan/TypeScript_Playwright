let prices = [20, 10, 2, 8, 3, 9, 12, 15, 60, 80, 25, 20, -1];
let sums = 0;
let counts = 0;
for (let price of prices) {
    if (price === -1)
        break;
    if (price >= 5 && price <= 30) {
        sums += price;
        counts++;
    }
}
let avg = 0;
if (counts !== 0) {
    avg = sums / counts;
}
console.log(avg);
export {};
//# sourceMappingURL=IterationH3.js.map