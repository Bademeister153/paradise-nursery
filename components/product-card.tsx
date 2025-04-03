"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Plant } from "@/data/plants"
import { formatCurrency } from "@/lib/utils"

interface ProductCardProps {
  plant: Plant
}

export default function ProductCard({ plant }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 bg-gray-100">
        <Image src={plant.image || "/placeholder.svg"} alt={plant.name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{plant.name}</h3>
        <p className="text-emerald-700 font-medium mt-1">{formatCurrency(plant.price)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={() => addToCart(plant)} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

