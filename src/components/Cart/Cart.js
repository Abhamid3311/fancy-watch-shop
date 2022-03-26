import React from 'react';
import './Cart.css';
const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props;
    let watchName = []
    for (const watch of cart) {
        watchName.push(watch.shortName);
    }


    return (
        <div className='cart'>
            <h2>This is Cart: {props.cart.length}</h2>
            <h3>{watchName}</h3>
        </div>
    );
};

export default Cart;