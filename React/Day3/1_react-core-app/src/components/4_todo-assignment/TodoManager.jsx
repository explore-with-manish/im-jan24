import React, { Component } from 'react';

const TodoList = (props) => {
    return (
        <div className="mt-5">
            <h1 className="mb-4">Todo List</h1>
            <ul className="list-group mb-4">
                
            </ul>
        </div>
    );
};

class Add2Todo extends Component {
    render() {
        return (
            <form className='mt-5'>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add a new todo..." />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}

class TodoManager extends Component {
    render() {
        return (
            <div>
                <Add2Todo />
                <TodoList />
            </div>
        );
    }
}

export default TodoManager;