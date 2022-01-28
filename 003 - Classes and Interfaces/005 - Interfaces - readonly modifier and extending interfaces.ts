/* --- Interfaces --- */

// Interfaces defines a contract
// Any class that implements a contract MUST provide a implementation of what's inside the interface

// readonly interfaces
// The readonly modifier indicates that since a property is initialized, you cannot reassign again

// Extending Interfaces
// With interfaces, you can extends how many interfaces you want!

interface Named {
    readonly _name: string;
}

interface Developer extends Named {
    _technologies: string[];

    showTechnologies(): void;
    showAllInfo(): void;
}

class Person implements Developer {
    _name: string;
    _age: number;
    _technologies: string[];

    constructor(name: string, age: number, technologies: string[]) {
        this._name = name;
        this._age = age;
        this._technologies = technologies;
    }

    showTechnologies(): void {
        this._technologies.forEach((tech) => console.log(tech));
    }

    showAllInfo(): void {
        console.log(`${this._name} | ${this._age} years`);
        console.table(this._technologies);
    }
}

const person1 = new Person('Lucas', 24, [
    'JavaScript',
    'React',
    'C#',
    '.NET Core',
    'TypeScript',
]);

person1.showTechnologies();
person1.showAllInfo();
