"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"



export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-blue-950 text-white py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Container */}
        <Link href="/" >
          <Image
            src={"/canvaa.png"}
            alt="GLC PAK Logo"
            width={200}
            height={100}
            className="h-24 w-auto object-contain"
            priority={true}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-lg font-medium hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link href="/whoweare" className="text-lg font-medium hover:text-blue-200 transition-colors">
            Who We Are
          </Link>
          <Link href="/vision-and-mission" className="text-lg font-medium hover:text-blue-200 transition-colors">
             Vision & Mission 
          </Link>
          <Link href="/ministries" className="text-lg font-medium hover:text-blue-200 transition-colors">
            Ministries
          </Link>
          <Link href="/contact-us" className="text-lg font-medium hover:text-blue-200 transition-colors">
            Contact Us
          </Link>
          <Link
            href="/support-us"
            className="bg-white text-blue-800 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Support Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-blue-950 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden border-t border-blue-950 mt-3">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-lg font-medium hover:text-blue-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/whoweare"
              className="text-lg font-medium hover:text-blue-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Who We Are
            </Link>
            <Link
              href="/vision-and-mission"
              className="text-lg font-medium hover:text-blue-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
             Vision & Mission
            </Link>
            <Link
              href="/ministries"
              className="text-lg font-medium hover:text-blue-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
             Ministries
            </Link>
            <Link
              href="/contact-us"
              className="text-lg font-medium hover:text-blue-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/support-us"
              className="bg-white text-blue-950 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block text-center"
              onClick={() => setIsOpen(false)}
            >
              Support Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

