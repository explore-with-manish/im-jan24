import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import ProductFormComponent from './ProductFormComponent';

const ManageProductComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.products.items);
    const [product, setProduct] = useState({ id: "", name: "", description: "", status: "" });
    const { id } = useParams();

    useEffect(() => {
        if (id && products.length > 0) {
            const productToEdit = products.find((product) => product.id === parseInt(id));
            setProduct(productToEdit || { id: "", name: "", description: "", status: "" });
        }
    }, [id, products]);

    const saveProduct = async (e) => {
        e.preventDefault();
    }

    const updateState = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const pageText = product.id ? "Edit Product" : "Create Product";

    return (
        <ProductFormComponent pageText={pageText} product={product} onChange={updateState} onSave={saveProduct} />
    );
};

export default ManageProductComponent;