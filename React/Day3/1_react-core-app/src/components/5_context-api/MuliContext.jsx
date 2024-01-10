import React, { Component } from 'react';

const C1 = React.createContext();
const C2 = React.createContext();
const C3 = React.createContext();

class ComponentFour extends Component {
    render() {
        return (
            <h3 className="text-success">Component Four - {this.context}</h3>
        );
    }
}

ComponentFour.contextType = C1;

class ComponentThree extends Component {
    render() {
        return (
            <>
                <C1.Consumer>
                    {
                        (data) => (
                            <h3 className="text-primary">{data}</h3>
                        )
                    }
                </C1.Consumer>
                <C2.Consumer>
                    {
                        (data) => (
                            <h3 className="text-primary">{data}</h3>
                        )
                    }
                </C2.Consumer>
                <C3.Consumer>
                    {
                        (data) => (
                            <h3 className="text-primary">{data}</h3>
                        )
                    }
                </C3.Consumer>
            </>
        );
    }
}

class ComponentTwo extends Component {
    render() {
        return (
            <>
                <C1.Consumer>
                    {
                        (data) => (
                            <h3 className="text-info">{data}</h3>
                        )
                    }
                </C1.Consumer>
                <C2.Consumer>
                    {
                        (data) => (
                            <h3 className="text-info">{data}</h3>
                        )
                    }
                </C2.Consumer>
                <C3.Consumer>
                    {
                        (data) => (
                            <h3 className="text-info">{data}</h3>
                        )
                    }
                </C3.Consumer>
            </>
        );
    }
}

class ComponentOne extends Component {
    render() {
        return (
            <div>
                <ComponentTwo />
                <ComponentThree />
                <ComponentFour />
            </div>
        );
    }
}

class MultiContext extends Component {
    render() {
        return (
            <div>
                <h2 className="text-primary text-uppercase text-center mt-5 mb-5">With Multi Context</h2>

                <C1.Provider value={"Data from Context One (C1)"}>
                    <C2.Provider value={"Data from Context Two (C2)"}>
                        <C3.Provider value={"Data from Context Three (C3)"}>
                            <ComponentOne />
                        </C3.Provider>
                    </C2.Provider>
                </C1.Provider>
            </div>
        );
    }
}

export default MultiContext;