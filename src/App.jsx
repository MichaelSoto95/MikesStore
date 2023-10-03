import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Nav from "./assets/components/nav";
import Footer from "./assets/components/footer";
import MainPage from "./assets/components/MainPage";
import { Routes, Route } from "react-router-dom";
import Loading from "./assets/components/Loading";
import Cart from "./assets/routes/Cart";
import Error from "./assets/routes/Error";
import { ProductDetail } from "./assets/routes/ProductDetail";
function App() {
  const [products, setProducts] = useState([]);
  const url = `https://fakestoreapi.com/products?limit=20`;
  const [isLoading, setIsLoading] = useState(true);
  // const [cart, setCart] = useState([]);
  // const [qty, SetQty] = useState(0);

  const getData = async () => {
    try {
      const res = await axios.get(url);
      setProducts(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  {
    console.log(products);
  }
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={isLoading ? <Loading /> : <MainPage products={products} />}
        />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/:productId">
          <ProductDetail />
        </Route> */}
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
