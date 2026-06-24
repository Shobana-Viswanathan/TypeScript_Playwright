let input1 = 97;
let count = 0;
for (let i = 0; i < input1; i++) {
    if (input1 % i == 0) {
        count += 1;
    }
}
if (count == 2) {
    console.log("Yes");
}
else {
    console.log("No");
}
export {};
//# sourceMappingURL=IterationM3.js.map