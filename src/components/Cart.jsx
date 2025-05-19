import React from 'react'
import CartItems from './CartItems';
import "../App.css";
const Cart = ({ Cart,setCart ,setCartValue}) => {
  return (
    <>
      <ul className="cart">
        {Cart.map((items, id) => {
          return (
            <CartItems key={id} item={items} Cart={Cart} setCart={setCart} />
          );
        })}
      </ul>
    </>
  );
};

export default Cart;