import React, { Component } from 'react';

import classes from './ComponentOne.module.css';

class ComponentOne extends Component {
    render() {
        return (
            <>
                <h1 className='text-success'>Hello from Component One</h1>
                <h1 className={classes.card}>From Component One</h1>
            </>
        );
    }
}

export default ComponentOne;