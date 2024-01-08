console.log("Hello from the main file....");

const obj = {
    arr: [1, 2, 3, 4, 5],
    printArr() {
        console.log(...this.arr);                   // Array Spread (ECMASCRIPT 2015)
    },
    findData() {
        return this.arr.find(x => x === 5);
    }
};

obj.printArr();