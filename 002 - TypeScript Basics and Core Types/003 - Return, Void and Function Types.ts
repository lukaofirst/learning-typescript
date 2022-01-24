/* --- Return Types and Void --- */
// A function can return something or not

// Sometimes, a function that print's a message in the console, doesn't need to return something
function printMessage() {
    console.log('This is a dummy message!');
}

// But, there're cases that is necessary
// You can omit the 'third' type number and let Typescript infer his type
function calcSum(n1: number, n2: number): number {
    let result = n1 + n2;
    return result;
}

/* --- Function Types --- */
// When you need type functions

function calcTwoNumbers(n1: number, n2: number, resultPositive: boolean) {
    const result = n1 + n2;
    if (resultPositive) {
        return result;
    } else {
        return -result;
    }
}

let calc1: (a: number, b: number, bool: boolean) => number;

calc1 = calcTwoNumbers;
console.log(calc1(10, 20, true));

// Note.: Callback functions can return something, even if the argument on which
// they're passed does not except a returned value
