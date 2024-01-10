import React, { Component } from 'react';
import DataTable from '../common/DataTable';

class ComponentTwo extends Component {
    render() {
        return (
            <div>
                <DataTable items={this.props.data}>
                    <h4 className="text-info text-uppercase font-weight-bold">Employees Table</h4>
                </DataTable>
            </div>
        );
    }
}

class ComponentOne extends Component {
    render() {
        return (
            <div>
                <ComponentTwo data={this.props.data} />
            </div>
        );
    }
}

class WithoutContext extends Component {
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
                <h2 className="text-primary text-uppercase text-center mt-5 mb-5">Without Context API</h2>

                <ComponentOne data={this.state.employees} />
            </div>
        );
    }
}

export default WithoutContext;