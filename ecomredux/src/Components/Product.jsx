// Product.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, getItemsSelector } from '../redux/slices/cartSlice';

const Product = (props) => {
    // dispatch hook initialize karna zaroori hai
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        // addItem action call hota hai with payload (product object)
        dispatch(addItem({ name: props.productName, price: props.price }));
    };

    return (
        <div className="product-card">
            <h3>{props.productName}</h3>
            <p>Price: Rs. {props.price}</p>
            {/* Jab yeh button click hoga, data seedha Redux store mein jayega */}
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;