/* --- Generics --- */

// Allows you to create components (functions, classes or whatever) that can work
// with more flexibility to be able to handle more than one type workaround

/* - Built-in Generics - */
const namesArr: Array<string> = []; // Array<string> === string[]
//namesArr[0].split(' ');
//namesArr.length;

const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('this problem was resolved!'), 2000);
});

promise.then((data) => {
    // Using generics, when we access data argument, we can apply methods related to a string
    data.trim();
});

/* - Generic Function with Constraint - */
// "U extends object" is saying: I don't care for what type you're but you HAVE to be, at least, a object
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return { ...objA, ...objB };
}

const mergeObj1 = merge(
    {
        firstName: 'Lucas',
        lastName: 'Oliveira',
        hobbies: ['Coding', 'Studing'],
    },
    { age: 24, job: 'Developer' }
);

console.log(mergeObj1);

/* - keyof Constraint - */
// You can use to check, for example, if certain prop of a object is part of it or not
function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'LUCAS' }, 'name'));
