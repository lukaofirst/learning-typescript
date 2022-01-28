/* --- Generics Classes - */

class DataStorage<T extends number | string | boolean> {
    private data: T[] = [];

    addItems(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }

        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const stringStorage = new DataStorage<string>();

stringStorage.addItems('GODSENT');
stringStorage.addItems('Last Dance');
stringStorage.addItems('00Nation');
stringStorage.addItems('Furia');

stringStorage.removeItem('Furia');

console.log(stringStorage.getItems());

const numericStorage = new DataStorage<number>();
numericStorage.addItems(10);
numericStorage.addItems(20.1);
numericStorage.addItems(-8.85);
numericStorage.addItems(parseFloat(Math.PI.toFixed(2)));

numericStorage.removeItem(-8.85);

console.log(numericStorage.getItems());
