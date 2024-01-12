import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsComponent = ({ data }) => {
    let { productId } = useParams();

    let product = data.find((product) => product.id === Number(productId));

    let productView;

    if (product) {
        productView = (
            <>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <hr />
                <h4 className={product.status === 'Available' ? 'text-success' : 'text-danger'}>{product.status}</h4>
            </>
        );
    } else {
        productView = <h2 className="text-warning">Product Not Found</h2>
    }

    return (
        <>
            <h2 className="text-warning">Product Details</h2>
            {productView}
        </>
    );
};

export default ProductDetailsComponent;