function sum(a, ...b) {
    let res = a;
    for (var i = 0; i < b.length; i++) {
        res += b[i];
    }
    return res;
}
let res1 = sum(3, 5);
let res2 = sum(3, 4, 5, 6);
console.log(res1);
console.log(res2);
export {};
//# sourceMappingURL=functionparamrest.js.map