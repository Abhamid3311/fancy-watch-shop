import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Watch from '../Watch/Watch';
import './Shop.css';

const Shop = () => {
    const [watches, setWatches] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('watches.json')
            .then(res => res.json()).then(data => setWatches(data));
    }, []);
    let newCart;
    const handleAddToCart = (watches) => {
        newCart = [...cart, watches];
        setCart(newCart);
    };
    const handleReset = () => {
        newCart = [];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="watch-container">
                {
                    watches.map(watch => <Watch
                        watch={watch}
                        key={watch.id}
                        handleAddToCart={handleAddToCart}
                    ></Watch>)
                }
            </div>

            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleReset={handleReset}
                ></Cart>

            </div>


        </div>
    );
};

export default Shop;