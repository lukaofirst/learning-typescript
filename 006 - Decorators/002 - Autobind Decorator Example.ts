/* --- Autobind Decorator Example --- */

// These parameters are default
// _ => Corresponds to object's prototype (you need to pass like "_" to tell TypeScript that you don't want to name it)
// _2 => Corresponds to method's name (the same here...)
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);

            return boundFn;
        },
    };

    return adjDescriptor;
}

class Printer {
    message = 'This works!';

    // @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();
p.showMessage();

const button = document.getElementById('button')!;

button.addEventListener('click', p.showMessage);
