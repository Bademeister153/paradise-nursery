import { Link, useLocation } from "react-router-dom"
import { useCart } from "../context/cart-context"
import { ShoppingCart } from "./icons/ShoppingCart"

export default function Header() {
  const location = useLocation()
  const { totalItems } = useCart()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-emerald-700">
            Paradise Nursery
          </Link>

          <div className="flex items-center space-x-4">
            {location.pathname !== "/products" && (
              <Link to="/products">
                <button className="text-gray-700 hover:text-emerald-700 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Products
                </button>
              </Link>
            )}

            {location.pathname !== "/" && location.pathname !== "/products" && (
              <Link to="/">
                <button className="text-gray-700 hover:text-emerald-700 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Home
                </button>
              </Link>
            )}

            <Link to="/cart" className="relative">
              <button
                className={`border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition-colors ${
                  location.pathname === "/cart" ? "bg-emerald-50" : ""
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

