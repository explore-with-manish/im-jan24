import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorHandler from '../common/ErrorHandler';
import NavigationComponent from '../bs-nav/NavigationComponent';

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