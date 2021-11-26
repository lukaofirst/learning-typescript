/* ----- Classes and Interfaces ----- */

/* --- Interfaces --- */
// It has the same logic applied to C#,
// interfaces is a contract that any classes MUST implement their content
interface IDeveloper {
    name: string;
    salary: number;
    languages: string[];

    showDeveloperInfo(): void;
}

class Developer implements IDeveloper {
    constructor(
        public name: string,
        public salary: number,
        public languages: string[]
    ) {
        this.name = name;
        this.languages = languages;
        this.salary = salary;
    }

    showDeveloperInfo() {
        console.log(`Name: ${this.name} | Salary: R$${this.salary}`);
    }

    showLanguagesList() {
        this.languages.forEach((element) => {
            console.log(element);
        });
    }
}

class additionalInfoDeveloper extends Developer {
    constructor(
        public name: string,
        public salary: number,
        public languages: string[],
        public otherTechnologies: string[]
    ) {
        super(name, salary, languages);
    }

    showOtherTechnologies() {
        this.otherTechnologies.forEach((element) => {
            console.log(element);
        });
    }
}

const dev1 = new additionalInfoDeveloper(
    'Lucas',
    3000,
    ['JavaScript', 'C#', 'Microsoft SQL Server'],
    ['React', 'Bootstrap', 'TailwindCSS', 'Sass']
);

dev1.showDeveloperInfo();
dev1.showLanguagesList();
dev1.showOtherTechnologies();
