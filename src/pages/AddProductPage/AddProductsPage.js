import React from 'react';
import ProductForm from '../../components/ProductForm/ProductForm';
import { useProductContext } from '../../context/ProductContext';
import './AddProductPage.css';
const AddProductPage = () => {
    const { addProducto } = useProductContext();
    return (
        <div className="add-product-page">
            <ProductForm onSubmit={addProducto} />
        </div>
    );
};
export default AddProductPage;