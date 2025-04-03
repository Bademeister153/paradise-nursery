import { Link } from "react-router-dom"
import backgroundImage from "../assets/background.jpg"
import "../styles/tailwind.css"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage || `https://via.placeholder.com/1920x1080?text=Paradise+Nursery`}
          alt="Paradise Nursery Background"
          className="w-full h-full object-cover brightness-50"
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
        <Link to="/products">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-md text-lg transition-colors">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}

