import React from "react";
import Product from "./Product";

const Products = ({ fetchData, setCart, cart }) => {
  return (
    <ul className="products">
      {fetchData.map((product) => {
        return (
          <Product
            cart={cart}
            key={product.id}
            product={product}
            setCart={setCart}
          />
        );
      })}
    </ul>
  );
};

export default Products;
