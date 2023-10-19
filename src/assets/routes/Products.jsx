import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/Context";

const Products = ({ title, image, price, id }) => {
  const { AddToCart, decreaseFromCart, deleteFromCart, getproductQuantity } =
    useContext(CartContext);

  const quantity = getproductQuantity(id);
  //console.log(quantity);
  return (
    <div className="product-item">
      <h3>{title}</h3>
      <p>
        {price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <div className="image-container">
        <img src={image} alt="item" />
      </div>

      {quantity > 0 ? (
        <div className="controls">
          <p>Quantity:{quantity}</p>
          <button onClick={() => AddToCart(id, image, title, price)}>+</button>
          <button onClick={() => decreaseFromCart(id)}>-</button>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => {
              deleteFromCart(id);
            }}>
            Remove
          </button>
        </div>
      ) : (
        <div className="controls">
          <p>Quantity:{quantity}</p>
          <button onClick={() => AddToCart(id, image, title, price)}>
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
