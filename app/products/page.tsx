"use client"

import { useEffect } from "react"
import { useCart } from "@/context/cart-context"
import Header from "@/components/header"
import ProductCard from "@/components/product-card"
import { plants, PlantCategory } from "@/data/plants"

export default function ProductsPage() {
  const { initializeCart } = useCart()

  // Initialize cart from localStorage on client side
  useEffect(() => {
    initializeCart()
  }, [initializeCart])

  // Group plants by category
  const categories = Object.values(PlantCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Plants</h1>

        {categories.map((category) => {
          const categoryPlants = plants.filter((plant) => plant.category === category)

          if (categoryPlants.length === 0) return null

          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 capitalize">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categoryPlants.map((plant) => (
                  <ProductCard key={plant.id} plant={plant} />
                ))}
              </div>
            </div>
          )
        })}
      </main>
    </div>
  )
}

