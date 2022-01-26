/* --- Classes --- */

/* - Getters and Setters - */
// It's used when you need to control the access of your properties's class

/* - static methods and properties - */

class Person {
    static currentYear: number = new Date().getFullYear();
    private _firstName: string;
    private _lastName: string;

    // You need to add the exclamation mark here,
    // because the compiler will complain to strict add this property into the constructor to initialize
    private _age!: number;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // With this commented, you cannot access the age, but you can set it!
    /*     public get age() {
        return this._age;
    } */

    set age(value: number) {
        this._age = value;
    }

    static displayActualDateTime() {
        console.log(new Date().toLocaleDateString('pt-br'));
    }

    showFullname() {
        return `${this._firstName} ${this._lastName} | ${this._age} years`;
    }
}

const person1 = new Person('Lucas', 'Macedo');
person1.age = 24;
console.log(person1.age);
console.log(person1);

console.log(Person.currentYear);
Person.displayActualDateTime();
