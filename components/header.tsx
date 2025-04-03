"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()
  const { totalItems } = useCart()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-emerald-700">
            Paradise Nursery
          </Link>

          <div className="flex items-center space-x-4">
            {pathname !== "/products" && (
              <Link href="/products">
                <Button variant="ghost">Products</Button>
              </Link>
            )}

            {pathname !== "/" && pathname !== "/products" && (
              <Link href="/">
                <Button variant="ghost">Home</Button>
              </Link>
            )}

            <Link href="/cart" className="relative">
              <Button variant="outline" size="icon" className={cn("relative", pathname === "/cart" && "bg-emerald-50")}>
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

