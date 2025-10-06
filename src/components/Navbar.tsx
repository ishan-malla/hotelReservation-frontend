"use client";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function HotelNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex sticky top-0 z-50 w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo Section */}
        <Link to="/" className="flex  flex-col items-center shrink-0 ">
          <span className="ml-2 text-lg font-bold text-white">Hotel</span>
          <span className="ml-2 text-lg font-bold text-white">Kathmandu</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-2 lg:space-x-6 ml-6 mr-4">
          <Link
            to="#rooms"
            className="px-3 py-2 text-sm font-medium hover:text-primary"
          >
            Rooms
          </Link>
          <Link
            to="#amenities"
            className="px-3 py-2 text-sm font-medium hover:text-primary"
          >
            Amenities
          </Link>
          <Link
            to="#dining"
            className="px-3 py-2 text-sm font-medium hover:text-primary"
          >
            FAQ
          </Link>
          <Link
            to="#gallery"
            className="px-3 py-2 text-sm font-medium hover:text-primary"
          >
            Gallery
          </Link>
          <Link
            to="#contact"
            className="px-3 py-2 text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Button Section */}
        <Link to="/book-room" className="hidden md:block shrink-0">
          <Button className="text-white rounded-full px-6 bg-primary hover:bg-primary/90">
            Book Now
          </Button>
        </Link>

        {/* Mobile Menu Button */}
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
        <div className="md:hidden py-4 px-4 border-t border-gray-700 bg-gradient-to-br from-gray-900 via-gray-800 to-black absolute top-16 left-0 right-0">
          <nav className="flex flex-col space-y-3">
            <Link
              to="#rooms"
              className="text-sm font-medium py-2 hover:bg-gray-800 rounded-md px-3"
              onClick={toggleMenu}
            >
              Rooms
            </Link>
            <Link
              to="#amenities"
              className="text-sm font-medium py-2 hover:bg-gray-800 rounded-md px-3"
              onClick={toggleMenu}
            >
              Amenities
            </Link>
            <Link
              to="#dining"
              className="text-sm font-medium py-2 hover:bg-gray-800 rounded-md px-3"
              onClick={toggleMenu}
            >
              Dining
            </Link>
            <Link
              to="#gallery"
              className="text-sm font-medium py-2 hover:bg-gray-800 rounded-md px-3"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link
              to="#contact"
              className="text-sm font-medium py-2 hover:bg-gray-800 rounded-md px-3"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link to="/book-room" className="mt-2" onClick={toggleMenu}>
              <Button className="w-full text-white bg-primary hover:bg-primary/90 rounded-full">
                Book Now
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
