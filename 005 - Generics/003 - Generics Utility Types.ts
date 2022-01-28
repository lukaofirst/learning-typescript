/* --- Generics Utility Types --- */

// See documentation to more utility types:
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Partial Type
// Make the properties in T optional
// Example usage: you need to create a object, but to create you need to add
// some properties step-by-step, validating-adding and so on...
type esportPlayer = {
    name: string;
    game: string;
    age: number;
    esTeam: string;
};

function validatingObjects(
    name: string,
    game: string,
    age: number,
    esTeam: string
): esportPlayer {
    let validatedObj: Partial<esportPlayer> = {};

    // validate all properties here!

    validatedObj.name = name;
    validatedObj.game = game;
    validatedObj.age = age;
    validatedObj.esTeam = esTeam;

    return validatedObj as esportPlayer;
}

const player1 = validatingObjects('Coldzera', 'CSGO', 27, '00Nation');
const player2 = validatingObjects('FalleN', 'CSGO', 30, 'Last Dance');

console.log(player1);
console.log(player2);

// Readonly Type
// Once you assign some values, you cannot add or remove it
// Example usage: You have a string, you set the concrete values,
// but then you cannot push or pop values
const names: Readonly<string[]> = ['Arthur Morgan', 'John Marston'];

// You cannot use push or pop with Readonly<string[]> up
// names.push('Dutch van der Linde');
// names.pop();
