/* --- Decorators --- */

// It's a function that can be applied into a class

// It's a experimental feature of TypeScript which is stage 2 proposal for JavaScript

// It's way to decorate members of a class, methods, function's parameters and the class itself
// with more extra funcionality (i.e. logging purposes, prevent unexpected behaviors, convert some string to uppercase...)

// This features is also present on Angular

// To enable Decorators, you need to uncomment a line in tsconfig.json
/* 
*
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    } 
*
*/

// Creating a decorator that log's something into console
function Logger() {
    return function (constructor: Function) {
        console.log(constructor);
    };
}

function LogProperty(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function LogAccessor(
    target: any,
    name: string,
    descriptor: PropertyDescriptor
) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function LogMethod(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function LogParameter(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

// @Logger()
class Person {
    // @LogProperty
    _name: string;
    // @LogProperty
    _lastName: string;

    // @LogAccessor
    get fullName() {
        return this._name + this._lastName;
    }

    constructor(name: string, lastName: string) {
        this._name = name;
        this._lastName = lastName;
    }

    // @LogMethod
    showFullname() {
        return this._name + ' ' + this._lastName;
    }
}

const person1 = new Person('Lucas', 'Macedo');

console.log(person1.showFullname());
