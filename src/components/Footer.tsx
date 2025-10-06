import { Link } from "react-router";
import {
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 w-full border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About RentEase
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-white transition">
                  Why Use RentEase
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-white transition"
                >
                  How RentEase Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/letting" className="hover:text-white transition">
                  Letting a Residential
                </Link>
              </li>
              <li>
                <Link to="/finding" className="hover:text-white transition">
                  Finding a Residential
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-white transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>

            {/* Socials */}
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
                { icon: MessageCircle, label: "Community", link: "#" },
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

          {/* Terms & Privacy */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Terms & Privacy
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10 border-t border-gray-800 pt-5 text-sm text-gray-400"></div>
      </div>
    </footer>
  );
};

export default Footer;
