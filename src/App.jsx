import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Home from "./components/Home/Home"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import { CartProvider } from "./context/CartContext"

export default function App() {
  return (
    <BrowserRouter >
      <CartProvider>
        <NavBar title="iCoremar" />
        <Routes>
          <Route path="/" element={<Home greeting="Bienvenidos a Inversiones Coremar" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter >
  )
}
