import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmModal from '../common/ConfirmModal';

const ProductListComponent = ({ products, onDelete }) => {
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
                        product={product} onDelete={onDelete}/>)
                }
            </tbody>
        </table>
    );
};

const ProductListRow = ({ product, onDelete }) => {
    const [show, setShow] = useState(false);

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
                    <Link className="text-danger" to={"/product/" + product.id} onClick={
                        (e) => {
                            e.preventDefault();
                            setShow(true);
                        }
                    }>Delete</Link>
                </td>
            </tr>
            <ConfirmModal show={show} title={"Confirm Delete Product"}
                message={"Are you sure you want to delete this product?"}
                handleYes={() => {
                    onDelete(product.id);
                    setShow(false);
                }} handleNo={() => {
                    setShow(false);
                }} />
        </>
    );
}

export default ProductListComponent;