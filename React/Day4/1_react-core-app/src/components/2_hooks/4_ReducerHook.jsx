import React, { useReducer } from 'react';

const counterActions = {
    increment: 'increment',
    decrement: 'decrement'
};

const counterState = { count: 0 };

const counterReducer = (state, action) => {
    switch (action.type) {
        case counterActions.increment:
            return { count: state.count + action.payload };
        case counterActions.decrement:
            return { count: state.count - action.payload };
        default:
            throw new Error();
    }
}

const Counter = (props) => {
    const [state, dispatch] = useReducer(counterReducer, counterState);

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={state.count} readOnly />
                <button className="btn btn-info"
                    onClick={() => { dispatch({ type: counterActions.increment, payload: props.interval }) }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={() => { dispatch({ type: counterActions.decrement, payload: props.interval }) }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

Counter.defaultProps = {
    interval: 1
};

const CounterSibling = (props) => {
    const [state, dispatch] = useReducer(counterReducer, counterState);

    return (
        <>
            <div className="text-center">
                <h3 className="text-success">Counter Sibling Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={state.count} readOnly />
                <button className="btn btn-success"
                    onClick={() => { dispatch({ type: counterActions.increment, payload: props.interval }) }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-success"
                    onClick={() => { dispatch({ type: counterActions.decrement, payload: props.interval }) }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

CounterSibling.defaultProps = {
    interval: 1
};


const ReducerHook = () => {
    return (
        <div>
            {/* <Counter />
            <hr />
            <Counter interval={10} /> */}

            <Counter />
            <hr />
            <CounterSibling interval={10} />
        </div>
    );
};

export default ReducerHook;