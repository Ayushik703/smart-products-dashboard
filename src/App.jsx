import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Dashboard} from "./pages/Dashboard"
import {ProductDetails} from "./pages/ProductDetails"
import {Header} from "./components/Header"

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
