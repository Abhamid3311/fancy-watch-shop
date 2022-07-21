import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Watch from '../Watch/Watch';
import './Shop.css';

const Shop = () => {
    const [watches, setWatches] = useState([]);
    const [cart, setCart] = useState([]);

    // console.log(cart);
    useEffect(() => {
        fetch('watches.json')
            .then(res => res.json()).then(data => setWatches(data));
    }, []);

    //add cart
    let newCart;
    const handleAddToCart = (watches) => {
        newCart = [...cart, watches];
        setCart(newCart);
    };

    //reset cart
    const handleReset = () => {
        newCart = [];
        setCart(newCart);
    };

    //random Watch
    const randomItem = (watchName) => {
        let randomItems = watchName[Math.floor(Math.random() * watchName.length)];
        alert(randomItems);
    };


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
                    onRandomItem={randomItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;