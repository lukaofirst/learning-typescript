/* --- Type Casting --- */

// It's a feature that allows you,
// when TypeScript doesn't not recognize the correct type,
// to avoid unnecessary behaviors, for example, accessing DOM elements

// For example, to get the value of a input, you have to use type casting
// The Non-null Assertion Operator (!) => Tells to TypeScript that the expression is not null
const inputName = document.getElementById('input-name')! as HTMLInputElement;

inputName.value = 'inserted dynamically';

// Syntax

// 1)
const input2 = document.getElementById('input2')! as HTMLInputElement;

// 2)
// Maybe has conflicts with JSX syntax
const input3 = <HTMLInputElement>document.getElementById('input2')!;
