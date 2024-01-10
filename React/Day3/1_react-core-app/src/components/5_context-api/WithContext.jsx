import React, { Component } from 'react';
import DataTable from '../common/DataTable';

const { Provider, Consumer } = React.createContext();

class ComponentTwo extends Component {
    render() {
        return (
            <div>
                <Consumer>
                    {
                        (data) => {
                            return (
                                <DataTable items={data}>
                                    <h4 className="text-info text-uppercase font-weight-bold">Employees Table</h4>
                                </DataTable>
                            );
                        }
                    }
                </Consumer>
            </div>
        );
    }
}

class ComponentOne extends Component {
    render() {
        return (
            <div>
                <ComponentTwo />
            </div>
        );
    }
}

class WithContext extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { id: 1, name: "Manish" },
                { id: 2, name: "Abhijeet" },
                { id: 3, name: "Ramakant" },
                { id: 4, name: "Subodh" },
                { id: 5, name: "Abhishek" }
            ]
        };
    }

    render() {
        return (
            <div>
                <h2 className="text-primary text-uppercase text-center mt-5 mb-5">With Context API</h2>

                <Provider value={this.state.employees}>
                    <ComponentOne />
                </Provider>
            </div>
        );
    }
}

export default WithContext;

var person = {
    id: 0,
    name: "Manish",
    city: "Pune"
};

// var id = person.id;
// var name = person.name;
// var city = person.city;

// var { id, name, city } = person;

// console.log("id: ", id);
// console.log("name: ", name);
// console.log("city: ", city);

var arr = [10, 20, 30, 40, 50];

// var x = arr[0];
// var y = arr[1];

// var [x, y] = arr;
// // var [x, ,y] = arr;

// console.log("x: ", x);
// console.log("y: ", y);

// [x, y] = [y, x];
// console.log("After Swap");
// console.log("x: ", x);
// console.log("y: ", y);