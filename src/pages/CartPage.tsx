"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/cart-context"
import Header from "../components/Header"
import CartItem from "../components/CartItem"
import { formatCurrency } from "../utils/format"
import "../styles/tailwind.css"

export default function CartPage() {
  const { cart, totalItems, totalPrice, initializeCart } = useCart()

  // Initialize cart from localStorage on client side
  useEffect(() => {
    initializeCart()
  }, [initializeCart])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {totalItems === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="mb-8">Add some plants to get started!</p>
            <Link to="/products">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
                Browse Plants
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Cart Items ({totalItems})</h2>
                <div className="divide-y">
                  {Object.values(cart).map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between text-lg font-medium mb-2">
                  <span>Total Items:</span>
                  <span>{totalItems}</span>
                </div>
                <div className="flex justify-between text-lg font-bold mb-6">
                  <span>Total Price:</span>
                  <span>{formatCurrency(totalPrice)}</span>
                </div>
                <div className="space-y-3">
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
                    Checkout
                  </button>
                  <Link to="/products">
                    <button className="w-full border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-2 px-4 rounded-md transition-colors">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

