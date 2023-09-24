import React, { useEffect, useState } from 'react';
import "./Shope.css";
import Product from '../Product/Product';

const Shope = () => {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handelAddToCart= (goods)=>{
        const newCart = [...cart, goods];
        setCart(newCart)
      
    }

    return (
        <div  className='shope-container'>
            <div className='product-container'>
                {
                    products.map(goods => <Product
                    key={goods.id}
                    goods={goods}
                    handelAddToCart={handelAddToCart}
                    ></Product>)
                }

            </div>
            <div className='card-container'>
                <h2>Order Summary</h2>
                <p>Selected Item: {cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shope;