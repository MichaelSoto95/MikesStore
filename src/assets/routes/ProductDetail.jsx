import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { productId } = useParams();
  const thisProduct = productsData.find((prod) => prod.id === productId);

  return (
    <div>
      <h1>{thisProduct.name}</h1>
      <p>Price: ${thisProduct.price}</p>
      <p>{thisProduct.description}</p>
    </div>
  );
};
