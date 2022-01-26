/* --- Classes --- */

/* - access modifiers in details - */
// public => It's the default, you can access everywhere inside or outside of the class
// private => You can only access inside the class
// protected => You can access the property if a class inherities from a base class

class Department {
    protected employees: string[] = [];

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

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    addEmployee(name: string): void {
        if (name === 'Oliver') {
            return;
        }
        this.employees.push(name);
    }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Oliver');

const it = new ITDepartment('d1', ['John', 'Arthur']);

it.addEmployee('Max');
it.addEmployee('Jane');
it.addEmployee('Oliver');

it.showEmployees();

console.log(it);
