class Car {
    brand;
    speed;
    fuel;
    constructor(brand, speed, fuel) {
        this.brand = brand;
        this.speed = speed;
        this.fuel = fuel;
    }
    accelerate() {
        this.speed += 10;
        console.log(`Accelerating to ${this.speed} km/h`);
    }
    refuel() {
        console.log(`Refueling with ${this.fuel}`);
    }
    honk() {
        console.log("Honk, honk!");
    }
    displayCarInfo() {
        console.log(`Brand: ${this.brand}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Fuel: ${this.fuel}`);
        this.refuel();
        this.honk();
    }
}
let myCar = new Car("Toyota", 60, "Gasoline");
console.log(`Brand: ${myCar.brand}`);
myCar.accelerate();
myCar.displayCarInfo();
export {};
//# sourceMappingURL=accessmodifiers.js.map