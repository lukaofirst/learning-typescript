/* --- Type Guards --- */

// Code pattern where you can check for a certain type before you try to do something with it at runtime
// It's kind of a sanity check with if's, if we're using union types

// With union types, we generally use 'typeof' operator
// With classes, we use 'instanceof' operator

// Type Guard with types
type Combinable = string | boolean;

function showBasedOnType(variable: Combinable) {
    if (typeof variable === 'boolean') console.log('Dealing with a boolean');
    else console.log("It's a string");
}

showBasedOnType(true);
showBasedOnType('true');

// Type Guard with classes
// Note.: We cannot use type guard with interfaces because TS compiler doesn't translate interfaces to JS
class Car {
    drive() {
        console.log('Driving a car...');
    }
}

class Bus {
    drive() {
        console.log('Driving a motocycle');
    }

    passangers(maxCapacity: number) {
        console.log(`Max passangers inside is: ${maxCapacity}`);
    }
}

type Vehicle = Car | Bus;

const v1 = new Car();
const v2 = new Bus();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Bus) {
        vehicle.passangers(50);
    }
}

useVehicle(v1);
useVehicle(v2);
