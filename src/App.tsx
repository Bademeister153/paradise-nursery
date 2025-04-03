import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/cart-context"
import LandingPage from "./pages/LandingPage"
import ProductsPage from "./pages/ProductsPage"
import CartPage from "./pages/CartPage"

function App() {
  // Get the basename from package.json homepage or use empty string
  // This is important for GitHub Pages to work correctly
  const basename = process.env.PUBLIC_URL || ""

  return (
    <CartProvider>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App

