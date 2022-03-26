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
    const handleAddToCart = (watches) => {
        const newCart = [...cart, watches];
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
                ></Cart>

            </div>


        </div>
    );
};

export default Shop;