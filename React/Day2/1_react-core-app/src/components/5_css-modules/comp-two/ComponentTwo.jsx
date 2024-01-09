import React, { Component } from 'react';

import classes from './ComponentTwo.module.css';

class ComponentTwo extends Component {
    render() {
        return (
            <>
                <h1 className='text-primary'>Hello from Component Two</h1>
                <h1 className={classes.card}>From Component Two</h1>
            </>
        );
    }
}

export default ComponentTwo;