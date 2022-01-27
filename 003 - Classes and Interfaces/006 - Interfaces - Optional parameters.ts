/* --- Interfaces --- */

// Optional Parameters
// You can turn a default property into a optional,
// you just have to mark that property with "?", right after the property name

// You can have optional parameters on constructor too
interface Named {
    readonly _name: string;
}

interface Aged {
    _age?: number;
}

interface Developer extends Named, Aged {
    _technologies: string[];
}

class Person implements Developer {
    _name: string;
    _age?: number;
    _technologies: string[];

    constructor(name: string, age: number, technologies: string[]) {
        this._name = name;
        this._age = age;
        this._technologies = technologies;
    }
}
