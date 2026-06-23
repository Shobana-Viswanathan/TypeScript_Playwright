let strname: string = "Smith";
let item: number = 40;

let total: number;

if (item < 10) {
    total = item * 12;
}
else if (item >= 10 && item <= 99) {
    total = item * 10;
}
else if (item >= 100) {
    total = item * 7;
}
else {
    console.log("Invalid input");
}

if (item >= 0) {
    console.log(strname + " " + total);
}