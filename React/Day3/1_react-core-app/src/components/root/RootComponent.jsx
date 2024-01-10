/* eslint-disable */
import React from 'react';
import CalculatorAssignment from '../1_assignment/CalculatorAssignment';
import CounterAssignment from '../2_communication/CounterAssignment';
import ListRoot from '../3_working-with-arrays/ListComponent';
import TodoManager from '../4_todo-assignment/TodoManager';
import WithoutContext from '../5_context-api/WithoutContext';
import WithContext from '../5_context-api/WithContext';
import MultiContext from '../5_context-api/MuliContext';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <CalculatorAssignment /> */}
            {/* <CounterAssignment /> */}
            {/* <ListRoot /> */}
            {/* <TodoManager /> */}

            {/* <WithoutContext /> */}
            {/* <WithContext /> */}
            <MultiContext />
        </div>
    );
};

export default RootComponent;