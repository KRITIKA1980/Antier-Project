import { Link } from "react-router-dom";

import {
  Clock,
  Star,
  ShoppingCart,
  Truck,
  Package,
  Utensils,
  Smile,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">FoodieExpress</h3>
            <p className="text-gray-400">Your ultimate destination for delicious food delivered fast.</p>
            <div className="flex space-x-4 mt-4">
              <Link to="#" className="text-gray-400 hover:text-yellow-200 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-yellow-200 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.417-4.293 4.106 4.106 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.188a11.644 11.644 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-yellow-200 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.86 8.17 6.84 9.51.5.09.68-.22.68-.49v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1-.07 1.53 1.03 1.53 1.03.88 1.5 2.3 1.07 2.87.82.09-.64.35-1.07.64-1.32-2.18-.25-4.47-1.09-4.47-4.84 0-1.07.38-1.95 1.03-2.64-.1-.25-.45-1.25.1-2.61 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.84c.85 0 1.7.11 2.5.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.36.1 2.61.65.69 1.03 1.57 1.03 2.64 0 3.76-2.3 4.58-4.48 4.83.35.3.67.88.67 1.77v2.63c0 .27.18.58.69.49C19.14 20.17 22 16.42 22 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/menu" className="hover:text-yellow-200 transition-colors flex items-center">
                  Menu <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-yellow-200 transition-colors flex items-center">
                  Categories <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-200 transition-colors flex items-center">
                  About Us <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-200 transition-colors flex items-center">
                  Contact <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-yellow-200 transition-colors flex items-center">
                  FAQ <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-yellow-400" /> {"+1 (123) 456-7890"}
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-yellow-400" /> {"info@foodieexpress.com"}
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-yellow-400" /> {"123 Food St, Flavor Town, USA"}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
          <p>{`© ${new Date().getFullYear()} FoodieExpress. All rights reserved.`}</p>
        </div>
      </footer>
  );
};

export default Footer;