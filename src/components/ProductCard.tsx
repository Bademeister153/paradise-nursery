"use client"

import { useCart } from "../context/cart-context"
import type { Plant } from "../data/plants"
import { formatCurrency } from "../utils/format"
import { Plus } from "./icons/Plus"

interface ProductCardProps {
  plant: Plant
}

export default function ProductCard({ plant }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 bg-gray-100">
        <img
          src={plant.image || `https://via.placeholder.com/400x400?text=${plant.name}`}
          alt={plant.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{plant.name}</h3>
        <p className="text-emerald-700 font-medium mt-1">{formatCurrency(plant.price)}</p>
      </div>
      <div className="p-4 pt-0">
        <button
          onClick={() => addToCart(plant)}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-md transition-colors flex items-center justify-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

