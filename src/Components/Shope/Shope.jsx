import React, { useEffect, useState } from 'react';
import "./Shope.css";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shope = () => {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
   

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

   

    useEffect(()=>{
        const storedCard = getShoppingCart();
        const savedCard = [];

        for(const id in storedCard){
           const addedProduct = products.find(product => product.id === id);
          
           if(addedProduct){
            const quantity = storedCard[id];
            
           addedProduct.quantity = quantity;
           savedCard.push(addedProduct);
           }
           
        //    console.log(addedProduct)
        }
        setCart(savedCard)
    }, [products])

    const handelAddToCart= (goods)=>{
        const newCart = [...cart, goods];
        setCart(newCart)
        addToDb(goods.id)
      
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
                <Cart
                cart={cart}
                ></Cart>
            </div>
            
        </div>
    );
};

export default Shope;