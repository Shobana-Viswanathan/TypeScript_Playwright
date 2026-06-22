"use strict";
const secret = Symbol("secret");
const user = {
    name: "Alice",
    [secret]: "top secret token"
};
console.log(user[secret]);
const symbolss = Object.getOwnPropertySymbols(user);
console.log(symbolss);
