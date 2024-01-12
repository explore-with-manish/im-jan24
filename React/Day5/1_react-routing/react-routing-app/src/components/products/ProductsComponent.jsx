import React from 'react';

import './ProductsComponent.css';
import { Link, Outlet } from 'react-router-dom';

const ProductsComponent = (props) => {
    return (
        <>
            <h1 className="text-primary text-center">Products Component</h1>
            <div className="row mt-5">
                <div className="col">
                    <div className="graybox">
                        <ul className="list-group">
                            {
                                props.productsData.map((product, index) => (
                                    <li key={product.id} className="list-group-item">
                                        <Link to={`${product.id}`}>{product.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default ProductsComponent;