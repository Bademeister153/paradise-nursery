"use client"

import { useCart } from "../context/cart-context"
import type { CartItem as CartItemType } from "../context/cart-context"
import { formatCurrency } from "../utils/format"
import { Minus } from "./icons/Minus"
import { Plus } from "./icons/Plus"
import { Trash } from "./icons/Trash"

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  return (
    <div className="py-4 flex items-center">
      <div className="relative h-20 w-20 rounded-md overflow-hidden bg-gray-100">
        <img
          src={item.image || `https://via.placeholder.com/400x400?text=${item.name}`}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="ml-4 flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-500">{formatCurrency(item.price)} each</p>
      </div>

      <div className="flex items-center space-x-2">
        <button
          className={`border border-gray-300 h-8 w-8 rounded-md flex items-center justify-center ${
            item.quantity <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
          onClick={() => decreaseQuantity(item.id)}
          disabled={item.quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </button>

        <span className="w-8 text-center">{item.quantity}</span>

        <button
          className="border border-gray-300 h-8 w-8 rounded-md flex items-center justify-center hover:bg-gray-100"
          onClick={() => increaseQuantity(item.id)}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="ml-6 text-right">
        <p className="font-medium">{formatCurrency(item.price * item.quantity)}</p>
        <button
          className="text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded-md text-sm flex items-center transition-colors"
          onClick={() => removeFromCart(item.id)}
        >
          <Trash className="h-4 w-4 mr-1" />
          Remove
        </button>
      </div>
    </div>
  )
}

