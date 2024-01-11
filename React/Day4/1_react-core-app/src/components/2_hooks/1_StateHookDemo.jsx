import React, { Component, useState } from 'react';

class CounterUsingClass extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }

    inc() {
        this.setState({ count: this.state.count + 1 });
    }

    dec() {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <>
                <div className="text-center">
                    <h1 className="text-info">Using Class Syntax</h1>
                </div>
                <div className="d-grid gap-2 mx-auto col-6">
                    <div className="text-center">
                        <h2 className="text-primary">{this.state.count}</h2>
                    </div>
                    <button className="btn btn-primary"
                        onClick={this.inc}>
                        <span className='fs-4'>+</span>
                    </button>
                    <button className="btn btn-primary"
                        onClick={this.dec}>
                        <span className='fs-4'>-</span>
                    </button>
                </div>
            </>
        );
    }
}

const CounterUsingFunction = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Using Function Syntax</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <div className="text-center">
                    <h2 className="text-primary">{count}</h2>
                </div>
                <button className="btn btn-primary"
                    onClick={() => { setCount(count + 1); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-primary"
                    onClick={() => { setCount(count - 1);  }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

const StateHookDemo = () => {
    return (
        <div>
            <CounterUsingClass />
            <hr />
            <CounterUsingFunction />
        </div>
    );
};

export default StateHookDemo;