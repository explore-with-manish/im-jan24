import React from 'react';
import Counter from './Counter';
import CounterSibling from './CounterSibling';
import { CounterProvider } from './CounterContext';

const CounterRoot = () => {
    return (
        <CounterProvider>
            <Counter />
            <hr />
            <CounterSibling interval={10} />
        </CounterProvider>
    );
};

export default CounterRoot;