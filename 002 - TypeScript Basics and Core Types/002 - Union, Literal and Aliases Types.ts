/* --- Union Types --- */
// You can specify more than one type to a variable (without 'any' type)
// to make your code more flexible
function combine(input1: number | string, input2: number | string) {
    let result: number | string;

    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + ' ' + input2.toString();
    }

    return result;
}

const combineNumbers = combine(10, 30);
console.log(combineNumbers);

const combineNames = combine('Lucas', 'Macedo');
console.log(combineNames);

/* --- Literal Types --- */
// Restricts a type, for example, if you have a type string into a parameter
// You can specify which string it will be used, if you have two options of strings

function showPrint(input: string, printMode: 'console' | 'alert') {
    if (printMode === 'console') {
        return console.log(input);
    } else {
        return alert(input);
    }
}

const showPrint1 = showPrint('Arthur Morgan', 'console');
const showPrint2 = showPrint('John Marston', 'alert');

/* --- Type Aliases and Object Types --- */
// Create your own types to avoid unnecessary code
type User = {
    firstName: string;
    lastName: string;
    age: number;
};

const user1: User = {
    firstName: 'Lucas',
    lastName: 'Macedo',
    age: 24,
};

const user2: User = {
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
};

function greeting(user: User) {
    return console.log(
        `First Name: ${user.firstName} | Last Name: ${user.lastName} | age: ${user.age}`
    );
}

greeting(user1);
greeting(user2);
