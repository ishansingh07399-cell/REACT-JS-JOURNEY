// Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import { addItem, getItemsSelector } from '../redux/slices/cartSlice';

const Cart = () => {
    // useSelector hook store ki updated value reactively fetch karta hai
    const items = useSelector(getItemsSelector);
    
    // Cart me items ka total price nikalne ke liye JS reduce function ka use kiya hai [00:34:16]
    const total = items.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);

    return (
        <div className="cart-container">
            <h2>Cart Details</h2>
            <h3>Total Amount: Rs. {total}</h3>
            <p>Total Items: {items.length}</p>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Rs. {item.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;