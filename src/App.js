import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Showproduct from "./components/products/showproduct";
import ProductInfo from "./components/products/productpage";
import Postproduct from "./components/products/postproduct";
import Cart from "./components/cart/cartinfo";
import Wishlist from "./components/wishlist/wishlistinfo";
import Buy from "./components/order/Buy";
import OrderInfo from "./components/order/orderinfo";
import UserInfo from "./components/account/userinfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/main" element={<Showproduct/>}></Route>
        <Route path="/main/productinfo/:productId" element={<ProductInfo/>}/>
        <Route path="/postproduct" element={<Postproduct/>}/>
        <Route path="/cartinfo" element={<Cart/>}/>
        <Route path="/wishinfo" element={<Wishlist/>}/>
        <Route path="/Buy" element={<Buy/>}/>
        <Route path="/order" element={<OrderInfo/>}/>
        <Route path="/User" element={<UserInfo/>}/> 
      </Routes> 
    </BrowserRouter>

  );
}

export default App;
