/* --- unknown type --- */
// It's a "elegant" way to avoid use "any" type, but with more type safety
let userInput: unknown;

userInput = 15;
userInput = 'Lucas';

let userName: string;

if (typeof userInput === 'string') {
    userName = userInput;
    console.log(userInput);
}

/* --- never type --- */
// If you have 'never' has return type, the return statement will never be reachable
// function infiniteLoop(): never {
//     while (true) {
//     }
//     return 'this will never execute';
// }

// never type: example
function generateError(message: string, code: number): never {
    throw { message: message, statusCode: code };
}

generateError('Something went wrong!', 500);
