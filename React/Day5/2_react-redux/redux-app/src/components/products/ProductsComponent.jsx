import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/products/productSlice';
import ProductListComponent from './ProductListComponent';

const ProductsComponent = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.products.status);            // Selector
    const products = useSelector(state => state.products.items);            // Selector
    const error = useSelector(state => state.products.error);            // Selector

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                Error: {error}
            </div>
        );
    } else {
        return (
            <>
                <div className="mt-5 mb-3">
                    <ProductListComponent products={products} />
                </div>
            </>
        );
    }
};

export default ProductsComponent;