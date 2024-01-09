import React, { Component } from 'react';

class ComponentWithProps extends Component {
    constructor(props) {
        super(props);

        // Props cannot be initialized in the Component
        // this.props = { name: "Manish" };

        // Error - Props are readonly
        // this.props.name = "Abhijeet";

        // Refrence Copy
        // this.state = this.props;
        // this.state.name = "Abhijeet";

        // Shallow Copy
        // // this.state = Object.assign({}, this.props);     // ES 2015
        // this.state = { ...this.props };
        // this.state.name = "Abhijeet";
        // this.state.address.city = "Mumbai";

        // Deep Copy
        this.state = JSON.parse(JSON.stringify(this.props));
        this.state.name = "Abhijeet";
        this.state.address.city = "Mumbai";

        // ImmutableJS or ImmerJS (Recommended)

        console.log("Ctor, State: ", this.state);
        console.log("Ctor, Props: ", this.props);
    }

    render() {
        console.log("Render, State: ", this.state);
        console.log("Render, Props: ", this.props);

        return (
            <div>
                <h2 className="text-primary">Component with Props</h2>
            </div>
        );
    }
}

export default ComponentWithProps;