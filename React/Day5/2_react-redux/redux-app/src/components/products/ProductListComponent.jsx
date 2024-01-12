import React from 'react';
import { Link } from 'react-router-dom';

const ProductListComponent = ({products}) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => <ProductListRow key={product.id}
                        product={product} />)
                }
            </tbody>
        </table>
    );
};

const ProductListRow = ({product}) => {
    return (
        <>
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.status}</td>
                <td>
                    <Link className="text-info" to={"/product/" + product.id}>Edit</Link>
                </td>
                <td>
                    <Link className="text-danger" to={"/product/" + product.id}>Delete</Link>
                </td>
            </tr>
        </>
    );
}

export default ProductListComponent;