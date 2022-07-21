import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart, handleReset, onRandomItem } = props;

    let watchName = [];
    for (const watch of cart) {
        watchName.push(watch.shortName);
    };



    return (
        <div className='cart'>
            <h2>Selected Watches: {
                cart.length <= 4 ? (cart.length) : (alert('Ooops! More than 4 watches'))}
            </h2>
            <div>
                {
                    watchName.map(watch => <li>{watch}</li>).slice(0, 4)
                }
            </div>

            <button onClick={() => onRandomItem(watchName)} className='btn btn-choose'>Choose 1 for me</button> <br />
            <button onClick={handleReset} className='btn btn-reset'>Reset</button>
        </div>
    );
};

export default Cart;