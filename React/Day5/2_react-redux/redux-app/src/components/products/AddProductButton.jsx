import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddProductButton = () => {
    const navigate = useNavigate();
    return (
        <button className='btn btn-primary btn-lg' onClick={() => { navigate('/product') }}>
            <span className='bi bi-plus'></span>
            &nbsp;Add Product
        </button>
    );
};

export default AddProductButton;