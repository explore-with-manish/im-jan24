import React from 'react';
import { NavLink } from 'react-router-dom';

import AppRoutes from '../../routes';

import './NavigationComponent.css';

var logo = require('../../assets/redux.svg').default;

const NavigationComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand d-flex flex-column align-items-center" to="/">
                        <img src={logo} alt="React" width="40" height="28" className="d-inline-block align-text-top" />
                        React Redux
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
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/counter">
                                    <i className="bi bi-1-circle-fill"></i>
                                    <span>Counter</span>
                                </NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link d-flex flex-column align-items-center" to="/products">
                                    <i className="bi bi-box-fill"></i>
                                    <span>Products</span>
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