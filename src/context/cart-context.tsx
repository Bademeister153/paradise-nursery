"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Plant } from "../data/plants"

export interface CartItem extends Plant {
  quantity: number
}

interface CartContextType {
  cart: Record<string, CartItem>
  totalItems: number
  totalPrice: number
  addToCart: (plant: Plant) => void
  removeFromCart: (id: string) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  initializeCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Record<string, CartItem>>({})

  // Calculate total items and price
  const totalItems = Object.values(cart).reduce((total, item) => total + item.quantity, 0)

  const totalPrice = Object.values(cart).reduce((total, item) => total + item.price * item.quantity, 0)

  // Initialize cart from localStorage
  const initializeCart = useCallback(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error)
        localStorage.removeItem("cart")
      }
    }
  }, [])

  // Save cart to localStorage
  const saveCart = (newCart: Record<string, CartItem>) => {
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  // Add item to cart
  const addToCart = (plant: Plant) => {
    const newCart = { ...cart }

    if (newCart[plant.id]) {
      newCart[plant.id].quantity += 1
    } else {
      newCart[plant.id] = {
        ...plant,
        quantity: 1,
      }
    }

    saveCart(newCart)
  }

  // Remove item from cart
  const removeFromCart = (id: string) => {
    const newCart = { ...cart }
    delete newCart[id]
    saveCart(newCart)
  }

  // Increase item quantity
  const increaseQuantity = (id: string) => {
    if (!cart[id]) return

    const newCart = { ...cart }
    newCart[id].quantity += 1
    saveCart(newCart)
  }

  // Decrease item quantity
  const decreaseQuantity = (id: string) => {
    if (!cart[id] || cart[id].quantity <= 1) return

    const newCart = { ...cart }
    newCart[id].quantity -= 1
    saveCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        initializeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

