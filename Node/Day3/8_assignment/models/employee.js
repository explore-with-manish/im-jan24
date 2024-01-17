class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    get Id() {
        return this.id;
    }

    set Id(value) {
        this.id = value;
    }

    get Name() {
        return this.name;
    }

    set Name(value) {
        this.name = value;
    }
}

module.exports = Employee;