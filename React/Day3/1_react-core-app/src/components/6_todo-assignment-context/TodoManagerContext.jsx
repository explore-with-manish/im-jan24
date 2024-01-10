import React, { Component } from 'react';

const TodoList = (props) => {
    return (
        <div className="mt-5">
            <h1 className="mb-4">Todo List</h1>
            <ul className="list-group mb-4">
                {
                    props.items.map((item, index) => {
                        return <li key={item.id} className='list-group-item'>{item.description}</li>
                    })
                }
            </ul>
        </div>
    );
};

class Add2Todo extends Component {
    render() {
        return (
            <form className='mt-5' onSubmit={(e) => {
                e.preventDefault();
                if (this.tBox) {
                    this.props.addItem(this.tBox.value);
                }
            }}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add a new todo..."
                        ref={elm => this.tBox = elm} />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}

class TodoManagerContext extends Component {
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
            <div>
                <Add2Todo addItem={this.addTodo} />
                <TodoList items={this.state.todos} />
            </div>
        );
    }
}

export default TodoManagerContext;