import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X } from "lucide-react";

export default function HomeNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex sticky top-0 z-50 w-full  text-white bg-blue-600 shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-col items-start justify-center cursor-pointer"
        >
          <span className="text-xl font-bold  leading-none">Hotel</span>
          <span className="text-xl font-bold leading-none">Kathmandu</span>
        </Link>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
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
          <Avatar className="cursor-pointer border border-gray-300 hover:scale-105 transition-transform">
            <AvatarImage src="https://via.placeholder.com/40" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-full"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t border-gray-200 bg-white absolute top-16 left-0 right-0 shadow-md">
          <nav className="flex flex-col space-y-3">
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
            <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/40" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <span className="font-medium text-gray-800">User</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
