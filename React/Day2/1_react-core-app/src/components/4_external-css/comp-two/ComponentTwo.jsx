import React, { Component } from 'react';

import './ComponentTwo.css';

class ComponentTwo extends Component {
    render() {
        return (
            <>
                <h1 className='text-primary'>Hello from Component Two</h1>
                <h1 className='card2'>From Component Two</h1>
            </>
        );
    }
}

export default ComponentTwo;