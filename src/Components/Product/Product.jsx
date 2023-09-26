import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    
    const {img, price, seller, name,ratings}= props.goods;
    const handelAddToCart = props.handelAddToCart
    return (
        <div className='product'>
            <img  src={img} alt="" />
           <div className='product-info'>
           <h5>{name}</h5>
            <p>Price: ${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Ratings:{ratings}</p>
           </div>
           <button onClick={()=>handelAddToCart(props.goods)} className='btn-add-cart'>
            Add To Cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;