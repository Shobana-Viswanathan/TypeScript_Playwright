let totalClasses: number = 100;
let attended: number = 60;
let medical: string = 'N';

let percentage = (attended / totalClasses) * 100;

if (percentage >= 75) {
    console.log(percentage + "% Allowed");
} 
else {
    if (medical === 'Y') {
        console.log(percentage + "% Allowed");
    } else {
        console.log(percentage + "% Not allowed");
    }
}