import React from 'react';
import { NavLink } from 'react-router-dom';

import AppRoutes from '../../routes/index';

import './NavigationComponent.css';

var logo = require('../../logo.svg').default;

const NavigationComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand d-flex flex-column align-items-center" to="/">
                        <img src={logo} alt="React" width="40" height="28" className="d-inline-block align-text-top" />
                        React Routing - v6
                    </NavLink>

                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/">
                                    <i className="bi bi-house-fill"></i>
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/about">
                                    <i className="bi bi-file-person-fill"></i>
                                    <span>About</span>
                                </NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/products">
                                    <i className="bi bi-file-earmark-ppt-fill"></i>
                                    <span>Products</span>
                                </NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/admin">
                                    <i className="bi bi-shield-lock-fill"></i>
                                    <span>Admin</span>
                                </NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/assign">
                                    <i className="bi bi-flag-fill"></i>
                                    <span>Assignment</span>
                                </NavLink>
                            </li>

                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/login">
                                    <i className="bi bi-person-square"></i>
                                    <span>Login</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <>
                {AppRoutes}
            </>
        </>
    );
};

export default NavigationComponent;