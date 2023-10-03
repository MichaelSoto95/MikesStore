import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../Context/Context";

const Nav = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { items } = useContext(CartContext);
  const totalCart = items.reduce((acc, prod) => acc + prod.quantity, 0);
  return (
    <div className="nav-container">
      <h1 onClick={scrollTop}>MIKES STORE</h1>
      <Link to="/Cart">
        <div className="cart-container">
          <FaShoppingCart className="cart-logo" />
          <div className="cart-lenght">{totalCart}</div>
        </div>{" "}
      </Link>
    </div>
  );
};

export default Nav;
