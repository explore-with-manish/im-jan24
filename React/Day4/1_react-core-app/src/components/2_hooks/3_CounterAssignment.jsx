import React, { Component, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
    console.log("Counter Executed...");

    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    let clickCount = useRef(0);
    let isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        } else {
            clickCount.current += 1;
            if (clickCount.current > 9) {
                setFlag(true);
            }
        }
    }, [count]);

    const reset = (e) => {
        clickCount.current = 0;
        setCount(0);
        setFlag(false);
    };

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={count} readOnly />
                <button className="btn btn-info" disabled={flag}
                    onClick={() => { setCount(count + props.interval) }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info" disabled={flag}
                    onClick={() => { setCount(count - props.interval) }}>
                    <span className='fs-4'>-</span>
                </button>
                <button className="btn btn-secondary" disabled={!flag}
                    onClick={(e) => { reset(e); }}>
                    <span className='fs-4'>Reset</span>
                </button>
            </div>
        </>
    );
}

Counter.defaultProps = {
    interval: 1
};

Counter.propTypes = {
    interval: PropTypes.number
};

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