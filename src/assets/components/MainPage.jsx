import React from "react";
import Products from "../routes/Products";
import { CartContext } from "../../Context/Context";
// import { useEffect } from "react";
// import CartProvider from "../../Context/Context";
import { useContext } from "react";

//const url = `https://fakestoreapi.com/products?limit=20`;

// const { ContextValue } = useContext(CartProvider);
// const { getData, products } = ContextValue;

// useEffect(() => {
//   getData(url);
// }, []);

const MainPage = ({ products }) => {
  const cart = useContext(CartContext);
  console.log(cart);
  console.log(cart.items);
  return (
    <div className="main">
      {products.map((prod) => {
        return <Products {...prod} key={prod.id} />;
      })}
    </div>
  );
};

export default MainPage;
