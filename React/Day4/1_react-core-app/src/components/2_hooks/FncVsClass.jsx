import React, { Component } from 'react';

class ComponentOne extends Component {
    render() {
        console.log("C1, this: ", this);
        return (
            <div>
                <h1>Class Syntax</h1>
            </div>
        );
    }
}

const ComponentTwo = () => {
    console.log("C2, this: ", this);
    return (
        <div>
            <h1>Arrow Syntax</h1>
        </div>
    );
}


class FunctionVsClassSyntax extends Component {
    render() {
        return (
            <div>
                <ComponentOne />
                <ComponentTwo />
            </div>
        );
    }
}

export default FunctionVsClassSyntax;