import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url('/leaves-318743_1920.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-16 mt-16">
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

