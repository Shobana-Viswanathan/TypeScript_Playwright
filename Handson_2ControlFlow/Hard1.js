let totalClasses = 100;
let attended = 60;
let medical = 'N';
let percentage = (attended / totalClasses) * 100;
if (percentage >= 75) {
    console.log(percentage + "% Allowed");
}
else {
    if (medical === 'Y') {
        console.log(percentage + "% Allowed");
    }
    else {
        console.log(percentage + "% Not allowed");
    }
}
export {};
//# sourceMappingURL=Hard1.js.map