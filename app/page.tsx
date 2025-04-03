import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/leaf-background.jpg"
          alt="Paradise Nursery Background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Paradise Nursery</h1>
        <p className="text-xl text-white mb-8">
          Welcome to Paradise Nursery, your one-stop destination for beautiful, healthy houseplants. We carefully select
          and nurture each plant in our collection to ensure they thrive in your home. With over 10 years of experience,
          our experts are dedicated to helping you create your own indoor paradise with plants that purify your air and
          brighten your space.
        </p>
        <Link href="/products">
          <Button size="lg" className="text-lg px-8 py-6">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  )
}

