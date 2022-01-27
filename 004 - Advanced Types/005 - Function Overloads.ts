/* --- Function Overloads --- */

// To do this, you need to declare, usually, two or more function signatures

// A tip: Overload Signatures !== Implementation Signature
// The implementation signature MUST be compatible with the overload signatures.

type Combinable = string | number;

// Overload Singatures
// The return is different because union type
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: number): string;

// Implementation Signature
function add(n1: Combinable, n2: Combinable) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}

// Overload Signature
function createDateTime(month: number): string;
function createDateTime(month: number, year?: number): string;

// Implementation Signature
function createDateTime(M: number, Y?: number) {
    if (Y !== undefined) return new Date(Y, M).toLocaleString().split(' ')[0];
    else return new Date(M).getMonth().toString();
}

const january = createDateTime(0);
const fullDate = createDateTime(0, 2022);

console.log(january);
console.log(fullDate);
