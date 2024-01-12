import React from 'react';
import { Link } from 'react-router-dom';

import TextInput from '../common/TextInput';

const ProductFormComponent = ({ pageText, product, onChange, onSave }) => {
    return (
        <>
            <h1 className="text-info text-center">{pageText}</h1>
            <div className="text-center">
                <Link to="/products">Back to List</Link>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form className="justify-content-center" onSubmit={onSave}>
                        <fieldset>
                            <legend className="text-center">Enter Product Information</legend>

                            <TextInput name="id" label="Id" value={product.id} readOnly={true} />
                            <TextInput name="name" label="Name" value={product.name} onChange={onChange} />
                            <TextInput name="description" label="Description" value={product.description} onChange={onChange} />
                            <TextInput name="status" label="Status" value={product.status} onChange={onChange} />

                            <div className="d-grid gap-2 mx-auto col mt-3">
                                <button type='submit' className="btn btn-success">Save</button>
                                <button type='button' className="btn btn-secondary">Reset</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductFormComponent;