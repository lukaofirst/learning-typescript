// Basic Types
let id: number = 23;
let username: string = 'Lucas';
let hireable: boolean = true;
let x: any = 'Lorem Ipsum';

let ids: number[] = [65, 23, 34, 98];
let arr: string[] = ['lorem', 'ipsum', 'dolor'];
let arr2: any[] = [true, 'hello', 90];

// Tuple
let person: [number, string] = [1, 'Lucas'];

// Tuple Array
let employee: [number, string, boolean][] = [
    [1, 'Lucas', true],
    [2, 'John', false],
    [3, 'Jane', true],
];

// Union
let productId: string | number;

productId = 5; // productId = '5';

// Enum
enum Categories {
    LOW = 1,
    MID,
    HIGH,
}

enum Direction {
    TOP = 'TOP',
    RIGHT = 'RIGHT',
    BOTTOM = 'BOTTOM',
    LEFT = 'LEFT',
}

// Objects
type User = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
};

const user1: User = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 29,
};

// Type Assertion
let cid: any = '1';
// let customerId = <number>cid;
let customerId = cid as number;

// Interface
interface UserInterface {
    readonly id: number;
    name: string;
    age?: number;
}

const userInterface1: UserInterface = {
    id: 2,
    name: 'Lucas',
    age: 23,
};

interface IPerson {
    readonly id: number;
    name: string;
    age?: number;
    hireable: boolean;
    register(): string;
}

// Classes
class Person implements IPerson {
    id: number;
    name: string;
    age?: number;
    hireable: boolean;

    constructor(id: number, name: string, age: number, hireable: boolean) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.hireable = hireable;
    }

    register() {
        return `${this.name} | ${this.age} years old | ${
            hireable ? 'hireable' : 'no hireable'
        }`;
    }
}

const person1 = new Person(1, 'Lucas', 23, true);
const person2 = new Person(1, 'John', 21, false);

console.log(person1.register());
console.log(person2.register());

// Subclasses
class Employee extends Person {
    position: string;
    salary: number;

    constructor(
        id: number,
        name: string,
        age: number,
        hireable: boolean,
        position: string,
        salary: number
    ) {
        super(id, name, age, hireable);
        this.position = position;
        this.salary = salary;
    }
}

const emp1 = new Employee(1, 'Lucas', 23, true, 'Developer', 9999);

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let strArray = getArray<string>(['Lorem', 'Ipsum', 'Dolor']);
let numArray = getArray<number>([4, 7, 9, 2, 1]);
