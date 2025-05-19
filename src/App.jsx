import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
const loaclStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
function App() {
  const [fetchData, setFatchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cart, setCart] = useState(loaclStorage);
  const [cartValue, setCartValue] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const Api = await fetch("https://fakestoreapi.com/products/");
        const Data = await Api.json();
        if (Api.status === 200) {
          console.log(Data)
          setFatchData(Data);
        } else {
          setError("|| Error In Page ||");
        }
      } catch (error) {
        setError("|| Error In Page ||");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <header className="TitleHeader">
        <h1>ShopingCart</h1>
        <div className="shop" onClick={() => setCartValue((prev) => {
          return !prev
        })}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{cart.length}</span>
        </div>
      </header>
      {cartValue && (
        <Cart Cart={cart} setCart={setCart} setCartValue={setCartValue} />
      )}
      {error && <p className="Loading">{error}</p>}
      {loading && <p className="Loading">Page Is Loading...</p>}
      {!loading && fetchData !== null && (
        <>
          <Products fetchData={fetchData} setCart={setCart} cart={cart} />
        </>
      )}
    </>
  );
}

export default App;
