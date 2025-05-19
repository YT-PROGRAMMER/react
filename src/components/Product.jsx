import React from "react";
import StarIcon from "../assets/star.png";
const Product = ({ product, setCart, cart }) => {
  const rate = product.rating.rate;
  const rating = String(rate).split(".")[0];
  const notify = (pro) => {
    setCart((prev) => {
      const count1 = prev.find((item) => item.id === pro.id);
      if (count1 !== undefined) {
        const prevNew = prev.filter((item) => item.id !== count1.id);
        return [...prevNew, { ...pro, count1: count1.count1 + 1 }];
      } else {
        return [...prev, { ...pro, count1: 1 }];
      }
    });
  };
  
 
  return (
    <div className="product">
      <li>
        <div className="image">
          <img
            src={product.image}
            alt={product.title}
            width="200px"
            height="200px"
          />
        </div>
        <h4 className="title">Title: {product.title}</h4>
        <p className="des">description: {product.description}</p>
        <p className="rate">
          Rate:{" "}
          {Array(Number(rating))
            .fill(0)
            .map((_, i) => {
              return (
                <img
                  key={i}
                  src={StarIcon}
                  alt="star"
                  width="16px"
                  height="16px"
                />
              );
            })}
        </p>
        <div className="fo">
          <p>Price: {product.price} Dollar</p>
          <button onClick={() => notify(product)}>Add To Cart</button>
        </div>
      </li>
    </div>
  );
};

export default Product;
