import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/Context";

const Products = ({ title, image, price, id }) => {
  const { AddToCart, decreaseFromCart, deleteFromCart, getproductQuantity } =
    useContext(CartContext);
  // console.log(items);
  //const quantity = () => getproductQuantity(id);
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
      <div className="controls">
        <label htmlFor="input">Quantity: </label>
        {/* <input onChange={(e)=>SetQty(Number(e.target.value))} maxLength="2" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}/> */}
        <input
          type="number"
          // onChange={(e) => props.SetQty(Number(e.target.value))}
          // min="1"
          // max="5"
          // maxLength="2"
          // placeholder="1"
          // value={quantity}
        />
        <button onClick={() => AddToCart(id)}>Add</button>
        <button onClick={() => decreaseFromCart(id)}>decrease</button>
        <button
          onClick={() => {
            deleteFromCart(id);
          }}>
          remove
        </button>
      </div>
    </div>
  );
};

export default Products;
