"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import type { CartItem as CartItemType } from "@/context/cart-context"
import { formatCurrency } from "@/lib/utils"

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  return (
    <div className="py-4 flex items-center">
      <div className="relative h-20 w-20 rounded-md overflow-hidden bg-gray-100">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>

      <div className="ml-4 flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-500">{formatCurrency(item.price)} each</p>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => decreaseQuantity(item.id)}
          disabled={item.quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </Button>

        <span className="w-8 text-center">{item.quantity}</span>

        <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => increaseQuantity(item.id)}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="ml-6 text-right">
        <p className="font-medium">{formatCurrency(item.price * item.quantity)}</p>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-2 text-red-500 hover:text-red-700 hover:bg-red-50"
          onClick={() => removeFromCart(item.id)}
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Remove
        </Button>
      </div>
    </div>
  )
}

