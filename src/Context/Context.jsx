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

  const AddToCart = (id) => {
    const quantity = getproductQuantity(id);
    // console.log(id);
    // console.log(quantity);

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      const updatedCart = cartProducts.map((product) => {
        if (product.id === id)
          return { ...product, quantity: product.quantity + 1 };
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
    // cartProducts.map((item) => {});
  };

  const ContextValue = {
    items: cartProducts,
    // getItems,
    AddToCart,
    decreaseFromCart,
    deleteFromCart,
    GetCost,
  };
  //checar despues para presentar en cart
  //   const result = partyCtx
  //     .filter((p) => planList.includes(p.planCode)) // filter on items with planCode in planList
  //     .map(({ planCode, planShortName }) => ({ planCode, planShortName })); //

  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
