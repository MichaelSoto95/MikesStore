import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, AddToCart, decreaseFromCart, deleteFromCart, GetCost } =
    useContext(CartContext);
  //const total = prod.price * prod.quantity;

  if (items.length > 0) {
    return (
      <div className="cart">
        <h1>Your Cart:</h1>

        {items.map((prod) => {
          return (
            <div key={prod.id} className="cart-item">
              <h4 color="black">{prod.title}</h4>

              <div className="image-container">
                <img src={prod.image} alt={prod.title} height="75px" />
              </div>
              <div className="container">
                <div className="controls">
                  <button
                    onClick={() =>
                      AddToCart(prod.id, prod.image, prod.title, prod.price)
                    }>
                    +
                  </button>
                  <button onClick={() => decreaseFromCart(prod.id)}>-</button>
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      deleteFromCart(prod.id);
                    }}>
                    Remove
                  </button>
                </div>

                <div className="product-price">
                  <p>Quantity:{prod.quantity} </p>
                  <p>
                    Price:
                    {prod.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                  <p>Total:${(prod.price * prod.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          );
        })}
        <h3>
          Your Total is:
          {GetCost().toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h3>
        <Link to="/">
          <h3 style={{ padding: "15px" }}> Continue Shopping</h3>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <h1>Your cart is empty</h1>
        <Link to="/">
          <h3> Continue Shopping</h3>
        </Link>
      </div>
    );
  }
};

export default Cart;
