import React, { Component } from 'react';

export const TodoContext = React.createContext();

class TodoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, description: "Learn React" },
                { id: 2, description: "Learn Redux" },
            ]
        };
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(toDoText) {
        this.setState({
            todos: [...this.state.todos, {
                id: this.state.todos.length + 1,
                description: toDoText
            }]
        });
    }

    render() {
        return (
            <TodoContext.Provider value={{ todos: this.state.todos, addTodo: this.addTodo }}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;