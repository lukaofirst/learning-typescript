/* ----- Types ----- */

/* --- Adding Types --- */
function add(a: number, b: number) {
    return a + b;
}

const result = add(5, 10);

/* ----- Type Casting ----- */
// You can omit this: '{ firstName: string, lastName: string, fullName(): string}'
// because TypeScript will try to infer the types from infoUser's properties

// 1) Explicity Way
const infoUser: { firstName: string; lastName: string; fullName(): string } = {
    firstName: 'Lucas',
    lastName: 'Oliveira',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    },
};

// 2) Type Casting
const infoUser2 = {
    firstName: 'Lucas',
    lastName: 'Oliveira',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log(infoUser.fullName());

/* --- Type Casting: Working with DOM elements --- */
// You have to be more careful when you're selecting DOM elements,
// on how they came, because it's required to use Type Casting
const inputName = document.getElementById('input-name') as HTMLInputElement;
const inputAge = <HTMLInputElement>document.getElementById('input-age');
const dummyButton = document.querySelector('button#dummy-button');

function printInfo(name: string, age: number) {
    console.log(`Olá, ${name} você possui ${age} anos`);
}

dummyButton.addEventListener('click', () => {
    const nameValue = inputName.value;
    const ageValue = parseInt(inputAge.value);

    printInfo(nameValue, ageValue);
});

/* --- Aliases Types --- */
// You can abstract the types kind of destructuring concept does

// Reusing a example above
type InfoUsersType = {
    firstName: string;
    lastName: string;
    fullName(): string;
};

const infoUser3: InfoUsersType = {
    firstName: 'Lucas',
    lastName: 'Oliveira',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    },
};

/* --- Literal and Union Types */
function printMessage(message: string, printMode: 'console' | 'alert') {
    printMode === 'console' ? console.log(message) : alert(message);
}

printMessage('lorem ipsum', 'console');

/* --- Enums --- */
enum Ranking {
    LOW,
    MID,
    HIGH,
}

const salaries = [2000, 3500, 8000];

for (let salary of salaries) {
    salary < 2500
        ? console.log(Ranking.LOW)
        : salary < 4000
        ? console.log(Ranking.MID)
        : console.log(Ranking.HIGH);
}
