/* eslint-disable */
import React from 'react';
import ErrorHandler from '../common/ErrorHandler';
import AjaxComponent from '../1_ajax/AjaxComponent';
import UserComponent from '../1_ajax/UserComponent';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <AjaxComponent /> */}
                <UserComponent />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;