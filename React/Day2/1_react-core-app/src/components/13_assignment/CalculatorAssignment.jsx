import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form className="justify-content-center">
                        <fieldset>
                            <legend className="text-center">Calculator</legend>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t1">Number One</label>
                                <input type="text" className="form-control" id="t1" />
                            </div>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t2">Number Two</label>
                                <input type="text" className="form-control" id="t2" />
                            </div>
                            <div className="form-group mb-2 mt-2">
                                <h3>Result: </h3>
                            </div>
                            <div className="d-grid gap-2 mx-auto">
                                <button type="submit" className="btn btn-success">Add</button>
                                <button type="reset" className="btn btn-primary">Reset</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}


const CalculatorAssignment = () => {
    return (
        <div className='mt-3'>
            <Calculator />
        </div>
    );
};

export default CalculatorAssignment;