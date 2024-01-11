/* eslint-disable */
import React from 'react';
import ErrorHandler from '../common/ErrorHandler';
import AjaxComponent from '../1_ajax/AjaxComponent';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                <AjaxComponent />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;