import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
