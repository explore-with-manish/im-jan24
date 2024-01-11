import React, { useEffect, useState } from 'react';
import DataTable from '../common/DataTable';

import productApiClient from '../../services/product-api-client';

const AdminComponent = () => {
    const [state, setState] = useState({ products: [], message: "Loading Data, please wait..." });

    useEffect(()=>{
        productApiClient.getAllProducts().then(data => {
            setState({ products: [...data], message: "" });
        }).catch(eMsg => {
            setState({ message: eMsg });
        });
    }, []);

    return (
        <div className="text-center">
            <h1 className="text-primary">Admin Component</h1>
            <h4 className="text-success mb-5">Welcome, you are an authenticated user.</h4>
            <hr />
            <h3 className="text-danger">{state.message}</h3>

            <DataTable items={state.products}>
                <h4 className="text-primary text-uppercase font-weight-bold">Products Table</h4>
            </DataTable>
        </div>
    );
};

export default AdminComponent;