import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {

    let total = 0;
    let shippingTotal = 0;
    let quantity = 0;


    for(const product of cart){
      // if(product.quantity === 0){
      //   product.quantity =1;
      // }
      // product.quantity = product.quantity || 1;

      
        total = total + product.price * product.quantity;
        shippingTotal = shippingTotal +product.shipping;
        quantity =  quantity + product.quantity;
    }

    const tax = total*7/100;
    const grandTotal = total+shippingTotal+tax;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Item: {quantity}</p>
      <p>Total Price:{total}</p>
      <p>Shipping: {shippingTotal}</p>
      <p>Tax: {tax}</p>
      <h4>Grand Total: {grandTotal}</h4>
    </div>
  );
};

export default Cart;
