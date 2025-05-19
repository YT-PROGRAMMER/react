import React from "react";

const CartItems = ({ item, Cart, setCart }) => {
  const handling = (i) => {
    if (i.count1 > 1) {
      const promptValue = prompt("write all or count ").trim()
      if (promptValue === "count") {
        if (i.count1 > 1) {
          setCart((previous) => {
            const prev = previous.filter((it) => it.id !== i.id);
            return [...prev, { ...i, count1: i.count1 - 1 }];
          });
        } else {
          setCart(Cart.filter((items) => items.id !== i.id));
        }
      } else if (promptValue=== "all") {
        setCart(Cart.filter((items) => items.id !== i.id));
      } else {
        alert("wrong write all or count");
        
      }
    }else {
      setCart(Cart.filter((items) => items.id !== i.id));
    }
  };
  return (
    <>
      <div className="pp product">
        <li>
          <div className="image">
            <img src={item.image} alt={item.title} width="50px" height="50px" />
          </div>
          <p>{item.count1}</p>
          <h4 className="title">Title: {item.title}</h4>
          <div className="fo">
            <p>Price: {item.price} Dollar</p>
            <button onClick={() => handling(item)}>X</button>
          </div>
        </li>
      </div>
    </>
  );
};

export default CartItems;
