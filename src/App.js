import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [cart, setCart] = useState(() => {
    const items = localStorage.getItem('cart');
    return items ? JSON.parse(items) : [];
  });
  console.log(cart);
  return (

    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home cart={cart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
