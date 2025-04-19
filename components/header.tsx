"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-40">
              <Image
                src="/placeholder.svg?height=40&width=160&text=JaipurHomes"
                alt="JaipurHomes Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-red-600 font-medium">
              Home
            </Link>
            <div className="relative group">
              <button
                className="flex items-center text-gray-800 hover:text-red-600 font-medium"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Properties <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 hidden group-hover:block">
                <Link href="/properties" className="block px-4 py-2 text-gray-800 hover:bg-red-600 hover:text-white">
                  All Properties
                </Link>
                <Link
                  href="/properties?type=apartment"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-600 hover:text-white"
                >
                  Apartments
                </Link>
                <Link
                  href="/properties?type=villa"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-600 hover:text-white"
                >
                  Villas
                </Link>
                <Link
                  href="/properties?type=plot"
                  className="block px-4 py-2 text-gray-800 hover:bg-red-600 hover:text-white"
                >
                  Plots
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-gray-800 hover:text-red-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-red-600 font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="btn-primary">
              List Your Property
            </Link>
          </div>

          <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-800 hover:text-red-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div>
                <button
                  className="flex items-center text-gray-800 hover:text-red-600 font-medium py-2 w-full justify-between"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Properties <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/properties"
                      className="block text-gray-800 hover:text-red-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Properties
                    </Link>
                    <Link
                      href="/properties?type=apartment"
                      className="block text-gray-800 hover:text-red-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Apartments
                    </Link>
                    <Link
                      href="/properties?type=villa"
                      className="block text-gray-800 hover:text-red-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Villas
                    </Link>
                    <Link
                      href="/properties?type=plot"
                      className="block text-gray-800 hover:text-red-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Plots
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className="text-gray-800 hover:text-red-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-red-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="/contact" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
                List Your Property
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
