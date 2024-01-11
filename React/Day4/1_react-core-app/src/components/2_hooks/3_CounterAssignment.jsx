import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            count: 0
        };

        this.clickCount = 0;
    }

    manageClickCount() {
        this.clickCount++;
        if (this.clickCount > 9) {
            this.setState({ flag: true });
        }
    }

    inc() {
        this.setState({ count: this.state.count + this.props.interval }, () => {
            this.manageClickCount();
        });
    }

    dec() {
        this.setState({ count: this.state.count - this.props.interval }, () => {
            this.manageClickCount();
        });
    }

    render() {
        return (
            <>
                <div className="text-center">
                    <h3 className="text-info">Counter Component</h3>
                </div>
                <div className="d-grid gap-2 mx-auto col-6">
                    <input type="text" className="form-control form-control-lg" value={this.state.count} readOnly />
                    <button className="btn btn-info" disabled={this.state.flag}
                        onClick={this.inc.bind(this)}>
                        <span className='fs-4'>+</span>
                    </button>
                    <button className="btn btn-info" disabled={this.state.flag}
                        onClick={this.dec.bind(this)}>
                        <span className='fs-4'>-</span>
                    </button>
                    <button className="btn btn-secondary" disabled={!this.state.flag}
                        onClick={this.reset.bind(this)}>
                        <span className='fs-4'>Reset</span>
                    </button>
                </div>
            </>
        );
    }

    static get defaultProps() {
        return {
            interval: 1
        };
    }

    static get propTypes() {
        return {
            interval: PropTypes.number
        };
    }

    reset() {
        this.clickCount = 0;
        this.setState({ count: 0, flag: false });
    }
}

const CounterAssignment = () => {
    return (
        <>
            <Counter />
            <hr />
            <Counter interval={10} />
        </>
    );
};

export default CounterAssignment;