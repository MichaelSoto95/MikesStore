import React from "react";
import Products from "../routes/Products";
import { CartContext } from "../../Context/Context";
import { useContext } from "react";
import Loading from "./Loading";

const MainPage = ({ products }) => {
  const cart = useContext(CartContext);
  // console.log(cart);
  // console.log(cart.items);
  return (
    <div className="main">
      {products.map((prod) => {
        return <Products {...prod} key={prod.id} />;
      })}
    </div>
  );
};

export default MainPage;
