
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home.jsx'
import Register from "./pages/Register.jsx";
import Product from "./pages/Product.jsx";
import Deals from "./pages/Deals.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Password from "./pages/Password.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
