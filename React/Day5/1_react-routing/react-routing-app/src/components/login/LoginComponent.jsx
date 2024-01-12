import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import authenticatorClient from '../../services/authenticator-api-client';
import { useLocation, useNavigate } from 'react-router-dom';

export const routerHOC = (InputComponent) => {
    const WrapperComponent = (props) => {
        const navigate = useNavigate();
        const location = useLocation();

        return <InputComponent navigate={navigate} location={location} />;
    };
    return WrapperComponent;
};

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            message: "",
            formErrors: { username: "", password: "" },
            usernameValid: false,
            passwordValid: false,
            formValid: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(e) {
        const id = e.target.id;
        const value = e.target.value;
        this.setState({ [id]: value }, () => {
            this.validateField(id, value);
        });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let { usernameValid, passwordValid } = this.state;

        switch (fieldName) {
            case 'username':
                usernameValid = value.length >= 6;
                fieldValidationErrors.username = usernameValid ? '' : 'Username is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'Password is too short';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            usernameValid: usernameValid,
            passwordValid: passwordValid,
            formValid: usernameValid && passwordValid
        });
    }

    login(e) {
        e.preventDefault();
        authenticatorClient.login(this.state.username, this.state.password).then(() => {
            const { from } = this.props.location.state || { from: { pathname: '/' } };
            this.props.navigate(from);
        }).catch(eMsg => {
            this.setState({ message: eMsg });
        })
    }

    render() {
        return (
            <div className='row'>
                <h1 className="text-primary text-center">Login Component</h1>

                {
                    this.state.message
                        ? <h4 className="alert alert-danger">{this.state.message}</h4>
                        : null
                }

                <div className="col-sm-6 offset-sm-3">
                    <Form onSubmit={this.login}>
                        <Form.Group controlId='username' className='mb-3'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username"
                                value={this.state.username} onChange={this.handleChange} />
                            {
                                this.state.formErrors.username
                                    ? <Form.Text className="text-danger">{this.state.formErrors.username}</Form.Text>
                                    : null
                            }
                        </Form.Group>
                        <Form.Group controlId='password' className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password"
                                value={this.state.password} onChange={this.handleChange} />
                            {
                                this.state.formErrors.password
                                    ? <Form.Text className="text-danger">{this.state.formErrors.password}</Form.Text>
                                    : null
                            }
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={!this.state.formValid}
                            style={!this.state.formValid ? { cursor: 'not-allowed', pointerEvents: 'all' } : {}}>
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        );
    };
}

export default routerHOC(LoginComponent);