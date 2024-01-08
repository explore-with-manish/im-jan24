// var Person = (function () {
//     function Person(name) {
//         this._name = name;
//     }

//     Person.prototype.getName = function () {
//         return this._name;
//     }

//     Person.prototype.setName = function (name) {
//         this._name = name;
//     }

//     return Person;
// })();

class Person {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }
}

var p1 = new Person('jack');
console.log(p1.getName());
p1.setName('Abhijeet');
console.log(p1.getName());

var p2 = new Person('rose');
console.log(p2.getName());
p2.setName('Ramakant');
console.log(p2.getName());
