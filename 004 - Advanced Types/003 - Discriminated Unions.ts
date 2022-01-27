/* --- Discriminated Unions --- */

// It's a special type of a Type Guard
// Pattern used to make the usage of Type Guards easier
// Available option to work with objects types

// It's called 'discriminated union' because it has a property that describes related types
// but with methods that has different implementations
type Shark = {
    type: 'shark';
    swimmingSpeed: number;
};

type Hawk = {
    type: 'hawk';
    flyingSpeed: number;
};

type Human = {
    type: 'human';
    runningSpeed: number;
};

type Animal = Shark | Hawk | Human;

function showAnimalSpeed(animal: Animal) {
    let speed: number;
    switch (animal.type) {
        case 'hawk':
            speed = animal.flyingSpeed;
            break;
        case 'human':
            speed = animal.runningSpeed;
            break;
        case 'shark':
            speed = animal.swimmingSpeed;
            break;
    }

    console.log(`Animal => ${animal.type} | Speed (km/h): ${speed}`);
}

showAnimalSpeed({
    type: 'human',
    runningSpeed: 35,
});

showAnimalSpeed({
    type: 'hawk',
    flyingSpeed: 390,
});

showAnimalSpeed({
    type: 'shark',
    swimmingSpeed: 50,
});
