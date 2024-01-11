/* eslint-disable */
import React from 'react';
import ErrorHandler from '../common/ErrorHandler';
import NavigationComponent from '../bs-nav/NavigationComponent';
import { BrowserRouter as Router } from 'react-router-dom';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                <Router>
                    <NavigationComponent />
                </Router>
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;