"use client";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function HotelNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex sticky top-0 z-50 w-full bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex flex-col items-center shrink-0">
          <span className="ml-2 text-lg font-bold text-white">Hotel</span>
          <span className="ml-2 text-lg font-bold text-white">Kathmandu</span>
        </Link>

        <nav className="hidden md:flex items-center justify-center space-x-4 lg:space-x-6 ml-6 mr-4">
          <a
            href="#roomShowcase"
            className="px-3 py-2 text-sm font-medium hover:text-yellow-300"
          >
            Rooms
          </a>
          <a
            href="#facilities"
            className="px-3 py-2 text-sm font-medium hover:text-yellow-300"
          >
            Facilities
          </a>
          <a
            href="#aboutUs"
            className="px-3 py-2 text-sm font-medium hover:text-yellow-300"
          >
            About Us
          </a>
          <a
            href="#contactUs"
            className="px-3 py-2 text-sm font-medium hover:text-yellow-300"
          >
            Contact Us
          </a>
          <Link
            to="/rooms"
            className="px-3 py-2 text-sm font-medium hover:text-yellow-300"
          >
            Book Now
          </Link>
        </nav>

        <div className="hidden md:flex space-x-2">
          <Link to="/login">
            <Button className="text-white bg-blue-600 hover:bg-blue-500 rounded-full px-5 py-2">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="text-white bg-yellow-500 hover:bg-yellow-400 rounded-full px-5 py-2">
              Sign Up
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 hover:bg-gray-700 rounded-full"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t border-gray-700 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 absolute top-16 left-0 right-0">
          <nav className="flex flex-col space-y-3">
            <a
              href="#roomShowcase"
              className="text-sm font-medium py-2 hover:bg-blue-700 rounded-md px-3"
              onClick={toggleMenu}
            >
              Rooms
            </a>
            <a
              href="#facilities"
              className="text-sm font-medium py-2 hover:bg-blue-700 rounded-md px-3"
              onClick={toggleMenu}
            >
              Facilities
            </a>
            <a
              href="#aboutUs"
              className="text-sm font-medium py-2 hover:bg-blue-700 rounded-md px-3"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              href="#contactUs"
              className="text-sm font-medium py-2 hover:bg-blue-700 rounded-md px-3"
              onClick={toggleMenu}
            >
              Contact Us
            </a>
            <Link
              to="/rooms"
              className="text-sm font-medium py-2 hover:bg-blue-700 rounded-md px-3"
              onClick={toggleMenu}
            >
              Book Now
            </Link>
            <Link to="/login" onClick={toggleMenu}>
              <Button className="w-full text-white bg-blue-600 hover:bg-blue-500 rounded-full">
                Login
              </Button>
            </Link>
            <Link to="/signup" onClick={toggleMenu}>
              <Button className="w-full text-white bg-yellow-500 hover:bg-yellow-400 rounded-full">
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
