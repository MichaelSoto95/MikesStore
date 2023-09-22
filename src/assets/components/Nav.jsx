import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../Context/Context";

const Nav = (props) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { items } = useContext(CartContext);

  return (
    <div className="nav-container">
      <h1 onClick={scrollTop}>MIKES STORE</h1>
      <div className="cart-container">
        <FaShoppingCart className="cart-logo" />
        <div className="cart-lenght">{items.length}</div>
        <Link to="/Cart">Cart</Link>
      </div>
    </div>
  );
};

export default Nav;
