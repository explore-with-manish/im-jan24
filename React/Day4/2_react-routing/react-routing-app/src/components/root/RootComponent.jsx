/* eslint-disable */
import React from 'react';
import ErrorHandler from '../common/ErrorHandler';
import NavigationComponent from '../bs-nav/NavigationComponent';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                <NavigationComponent />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;