import React from 'react';
import './Watch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Watch = (props) => {
    console.log(props);
    const { name, price, img } = props.watch;
    return (
        <div className='watch-cart'>
            <img src={img} alt="" />

            <div className='watch-info'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>

            <button className='btn-add-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>


        </div>
    );
};

export default Watch;