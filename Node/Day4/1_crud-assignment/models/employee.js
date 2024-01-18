class Employee {
    constructor(id, name) {
        this.id = parseInt(id);
        this.name = name;
    }

    get Id() {
        return this.id;
    }

    set Id(value) {
        this.id = parseInt(value);
    }

    get Name() {
        return this.name;
    }

    set Name(value) {
        this.name = value;
    }
}

module.exports = Employee;