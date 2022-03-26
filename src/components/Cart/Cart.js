import React from 'react';
import './Cart.css';
const Cart = (props) => {
    // console.log(props.cart);
    const { cart, handleReset } = props;
    let watchName = []
    for (const watch of cart) {
        watchName.push(watch.shortName);
    }


    return (
        <div className='cart'>
            <h2>Selected Watches: {props.cart.length}</h2>
            <h2>{watchName}</h2>

            <button className='btn btn-choose'>Choose 1 for me</button> <br />
            <button onClick={handleReset} className='btn btn-reset'>Reset</button>
        </div>
    );
};

export default Cart;