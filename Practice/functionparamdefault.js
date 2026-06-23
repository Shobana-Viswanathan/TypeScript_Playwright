"use strict";
function displayName(name, greeting = "Hello") {
    return greeting + '' + name + '!';
}
console.log(displayName("Karthika"));
console.log(displayName("Karthik", "Hi"));
console.log(displayName("Sachin"));
