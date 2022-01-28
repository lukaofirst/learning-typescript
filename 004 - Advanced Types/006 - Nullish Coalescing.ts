/* --- Nullish Coalescing --- */

// Operator: "??"
// You can check for null or undefined

const userInput = undefined;
const userInput2 = '';

const storedData = userInput ?? 'gives a fallback!';
const storedData2 = userInput2 ?? 'another fallback!';

console.log(storedData);
console.log(storedData2);
