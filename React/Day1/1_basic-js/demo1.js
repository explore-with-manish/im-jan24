function Person(name) {
    this._name = name;

    this.getName = function() {
        return this._name;
    }

    this.setName = function(name) {
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
