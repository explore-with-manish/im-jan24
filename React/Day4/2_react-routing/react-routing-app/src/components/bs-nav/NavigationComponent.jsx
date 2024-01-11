import React from 'react';

import './NavigationComponent.css';

var logo = require('../../logo.svg').default;

const NavigationComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex flex-column align-items-center" href="/">
                        <img src={logo} alt="React" width="40" height="28" className="d-inline-block align-text-top" />
                        React Routing - v6
                    </a>

                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item px-3">
                                <a className="nav-link d-flex flex-column align-items-center" href="/">
                                    <i className="bi bi-house-fill"></i>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link d-flex flex-column align-items-center" href="/about">
                                    <i className="bi bi-file-person-fill"></i>
                                    <span>About</span>
                                </a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link d-flex flex-column align-items-center" href="/products">
                                    <i className="bi bi-file-earmark-ppt-fill"></i>
                                    <span>Products</span>
                                </a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link d-flex flex-column align-items-center" href="/admin">
                                    <i className="bi bi-shield-lock-fill"></i>
                                    <span>Admin</span>
                                </a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link d-flex flex-column align-items-center" href="/assign">
                                    <i className="bi bi-flag-fill"></i>
                                    <span>Assignment</span>
                                </a>
                            </li>

                            <li className="nav-item px-3">
                                <a className="nav-link d-flex flex-column align-items-center" href="/login">
                                    <i className="bi bi-person-square"></i>
                                    <span>Login</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <>
                
            </>
        </>
    );
};

export default NavigationComponent;