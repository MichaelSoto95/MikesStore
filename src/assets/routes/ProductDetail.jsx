import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { productId } = useParams();

  return <div>ProductDetail</div>;
};
