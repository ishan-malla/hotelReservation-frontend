import { Link } from "react-router";
import {
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 w-full border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              About Kathmandu Westie
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-white transition">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Rooms & Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Rooms</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/rooms" className="hover:text-white transition">
                  Standard Rooms
                </Link>
              </li>
              <li>
                <Link to="/suites" className="hover:text-white transition">
                  Luxury Suites
                </Link>
              </li>
              <li>
                <Link to="/dining" className="hover:text-white transition">
                  Dining & Restaurants
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-white transition">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Kathmandu, Nepal
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +977 1 2345678
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> info@kathmanduwestie.com
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-white mt-6 mb-2">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, label: "Instagram", link: "#" },
                { icon: Youtube, label: "YouTube", link: "#" },
                { icon: Twitter, label: "Twitter", link: "#" },
                { icon: Facebook, label: "Facebook", link: "#" },
                { icon: Linkedin, label: "LinkedIn", link: "#" },
              ].map(({ icon: Icon, label, link }) => (
                <Link
                  key={label}
                  to={link}
                  aria-label={label}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <Icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Terms & Policies */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellation"
                  className="hover:text-white transition"
                >
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
