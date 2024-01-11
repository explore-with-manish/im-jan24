/* eslint-disable */
import React from 'react';
import ErrorHandler from '../common/ErrorHandler';
import AjaxComponent from '../1_ajax/AjaxComponent';
import UserComponent from '../1_ajax/UserComponent';
import FunctionVsClassSyntax from '../2_hooks/FncVsClass';
import HooksRoot from '../2_hooks/HooksRoot';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <AjaxComponent /> */}
                {/* <UserComponent /> */}
                {/* <FunctionVsClassSyntax /> */}
                <HooksRoot />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;