import React, { Component } from 'react';

const card = { margin: '1em', paddingLeft: 0, border: '2px solid blue' };

class ComponentTwo extends Component {
    render() {
        return (
            <>
                <h1 className='text-primary'>Hello from Component Two</h1>
                <h1 style={{ margin: '1em', paddingLeft: 0, border: '2px solid blue' }}>From Component Two</h1>
                <h1 style={card}>From Component Two</h1>
            </>
        );
    }
}

export default ComponentTwo;