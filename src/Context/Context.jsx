import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  getproductQuantity: () => {},
  AddToCart: () => {},
  decreaseFromCart: () => {},
  deleteFromCart: () => {},
  GetCost: () => {},
});

function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const getproductQuantity = (id) => {
    const quantity = cartProducts.find((product) => product.id === id);
    // console.log(quantity);
    // console.log(quantity?.id);
    if (quantity?.quantity === undefined) {
      return 0;
    }
    return quantity.quantity;
  };

  const AddToCart = (id, image, title, price) => {
    const quantity = getproductQuantity(id);
    // console.log(id);
    // console.log(quantity);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        { id: id, quantity: 1, image: image, title: title, price: price },
      ]);
    } else {
      const updatedCart = cartProducts.map((product) => {
        if (product.id === id)
          return {
            ...product,
            quantity: product.quantity + 1,
            image: image,
            title: title,
            price: price,
          };
        else return product;
      });
      setCartProducts(updatedCart);
    }
  };

  const deleteFromCart = (id) => {
    setCartProducts(
      cartProducts.filter((product) => {
        return product.id != id;
      })
    );
  };

  const decreaseFromCart = (id) => {
    const quantity = getproductQuantity(id);
    console.log(quantity);
    quantity == 1
      ? deleteFromCart(id)
      : setCartProducts(
          cartProducts.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
        );
  };
  const GetCost = () => {
    let total = 0;
    cartProducts.forEach((item) => {
      let subTotal = item.quantity * item.price;
      console.log(subTotal);
      total += subTotal;
    });

    return total;
  };

  const ContextValue = {
    items: cartProducts,
    getproductQuantity,
    AddToCart,
    decreaseFromCart,
    deleteFromCart,
    GetCost,
  };

  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
