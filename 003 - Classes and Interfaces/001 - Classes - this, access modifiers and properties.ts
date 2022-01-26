/* --- Classes --- */

/* - 'this' keyword, access modifiers and classes properties - */
class Department {
    // private name: string;
    private employees: string[] = [];

    /* - using shorthand initialization - */
    /* - readonly => after initialization, you cannot re-assign other value to it - */
    constructor(private readonly id: string, public name: string) {}

    describe(this: Department) {
        console.log(`Department #${this.id}: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    showEmployees() {
        this.employees.forEach((employee) => {
            console.log(employee);
        });
    }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('John Doe');
accounting.addEmployee('Jane Jamerson');
accounting.addEmployee('Oliver Washington');

accounting.describe();
accounting.showEmployees();

// const accountingCopy = { name: 'Other Dpt', describe: accounting.describe };

// accountingCopy.describe();
