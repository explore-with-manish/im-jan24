import React, { Component } from 'react';
import userApiClient from '../../services/user-api-client';

class UserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            selectedUser: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.getUsers();
    }

    async getUsers() {
        const fetchedUsers = await userApiClient.getAllUsersAsync();
        if (fetchedUsers) {
            this.setState({ users: fetchedUsers });
        }
    }

    handleChange(e) {
        this.setState({ selectedUser: e.target.value });
    };

    render() {
        const { users, selectedUser } = this.state;
        return (
            <div className="mt-3">
                <select className="form-control form-select" value={selectedUser} onChange={this.handleChange}>
                    <option value="">Select a User</option>
                    {users.map(user => (
                        <option key={user.id} value={user.name}>
                            {user.name}
                        </option>
                    ))}
                </select>
                {selectedUser && <div className="alert alert-info mt-3">Selected User: {selectedUser}</div>}
            </div>
        );
    }
}

export default UserComponent;