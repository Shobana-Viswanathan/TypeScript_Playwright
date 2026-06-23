//arrow function without parameter
let print1=() => console.log("Hello Typescript");
print1();
//arrow function with parameter
let sums=(x:number,y:number):number => {
    return x+y;
}
sums(10,20)