/* eslint-disable */
import React from 'react';
import CalculatorAssignment from '../1_assignment/CalculatorAssignment';
import CounterAssignment from '../2_communication/CounterAssignment';
import ListRoot from '../3_working-with-arrays/ListComponent';
import TodoManager from '../4_todo-assignment/TodoManager';
import WithoutContext from '../5_context-api/WithoutContext';
import WithContext from '../5_context-api/WithContext';
import MultiContext from '../5_context-api/MuliContext';
import TodoManagerContext from '../6_todo-assignment-context/TodoManagerContext';
import ErrorHandler from '../common/ErrorHandler';
import AjaxComponent from '../7_ajax/AjaxComponent';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <CalculatorAssignment /> */}
                {/* <CounterAssignment /> */}
                {/* <ListRoot /> */}
                {/* <TodoManager /> */}

                {/* <WithoutContext /> */}
                {/* <WithContext /> */}
                {/* <MultiContext /> */}
                {/* <TodoManagerContext /> */}
                <AjaxComponent />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;