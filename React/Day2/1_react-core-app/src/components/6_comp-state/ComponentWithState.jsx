import React, { Component } from 'react';

class ComponentWithState extends Component {
    // constructor() {
    //     super();
    //     // console.log('Ctor, State', this.state);

    //     // State must be initialized in the constructor
    //     // State must be set to an object or null
    //     // this.state = 'Indiamart';

    //     this.state = { name: 'Indiamart' };
    //     this.message = "Hello World!";

    //     console.log('Ctor, State', this.state);
    // }

    state = { name: 'Indiamart' };

    render() {
        console.log('Render, State', this.state);

        return (
            <>
                <h2 className="text-primary">Component With State</h2>
                <h2 className="text-primary">Hello, {this.state.name}</h2>
                <h2 className="text-primary">{this.message}</h2>
            </>
        );
    }
}

export default ComponentWithState;