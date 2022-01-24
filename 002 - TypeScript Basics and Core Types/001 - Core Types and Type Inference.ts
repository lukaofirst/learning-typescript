/* --- Basic Types --- */

// number, string and boolean
function add(n1: number, n2: number) {
    // This sanity check is needed to prevent unexpected erros without TypeScript
    // if(n1 === 'number' && n2 === 'number') {
    //     return n1 + n2;
    // }
    return n1 + n2;
}

const number1 = 50;
const number2 = 2.5;

console.log(add(number1, number2));

/* --- Type Assignment and Type Inference --- */
// You don't have to explicit declare a type to a variable
// The TypeScript's compiler will try to infer the correct type for you.

// If you initialize a variable with type string and later you assign a number
// The TypeScript's compiler will complain

/* --- Object Type --- */
const person: {
    firstName: string;
    age: number;
    hobbies: string[];
} = {
    firstName: 'Lucas',
    age: 24,
    hobbies: ['Coding', 'Reading'],
};

/* --- Array Type --- */
let csgoTeams: string[];
let numbers: number[];

csgoTeams = ['Last Dance', 'GODSENT', 'Furia', '00Nation'];
numbers = [10, 23, 594, 92];

for (let team in csgoTeams) {
    console.log(csgoTeams[team].toLowerCase());
}

/* --- Tuples --- */
// With TypeScript you can specify the size of a array
// Tuples is kind of a record present in some languages, for example: C# or Python
const tupleForGames: [number, string] = [1, 'Red Dead Redemption 2'];

const tuplesArrayForGames: [number, string][] = [
    [1, 'Red Dead Redemption 2'],
    [2, 'God of War'],
];

for (let game in tuplesArrayForGames) {
    console.log(tuplesArrayForGames[game]);
}

/* --- Enums --- */
// You create a global constant identifiers

// You can define custom identifiers (without auto-increment) with numbers or strings
enum Rating {
    LOW = 1,
    LOW_MEDIUM,
    MEDIUM,
    MEDIUM_HIGH,
    HIGH,
}

const game1 = {
    name: 'Red Dead Redemption 2',
    rating: Rating.HIGH,
};

const game2 = {
    name: 'God of War',
    rating: Rating.MEDIUM_HIGH,
};

console.log(`Game: ${game1.name} | Rating: ${game1.rating}`);
console.log(`Game: ${game2.name} | Rating: ${game2.rating}`);
