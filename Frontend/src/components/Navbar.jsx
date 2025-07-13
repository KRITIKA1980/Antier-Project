import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [adminOpen, setAdminOpen] = useState(false);
  const [customerOpen, setCustomerOpen] = useState(false);

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="font-bold text-xl">FoodVerse</h1>

      <div className="flex space-x-6 items-center relative">
        <Link to="/" className="hover:text-orange-400">Home</Link>
        <Link to="/products" className="hover:text-orange-400">Shop</Link>
        <Link to="/cart" className="hover:text-orange-400">Cart</Link>

        {/* Customer Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setCustomerOpen(!customerOpen);
              setAdminOpen(false);
            }}
            className="hover:text-orange-400"
          >
            Customer
          </button>
          {customerOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md z-50">
              <Link
                to="/customer-login"
                className="block px-4 py-2 hover:bg-orange-100"
                onClick={() => setCustomerOpen(false)}
              >
                Customer Login
              </Link>
              <Link
                to="/customer-register"
                className="block px-4 py-2 hover:bg-orange-100"
                onClick={() => setCustomerOpen(false)}
              >
                Customer Signup
              </Link>
            </div>
          )}
        </div>

        {/* Admin Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setAdminOpen(!adminOpen);
              setCustomerOpen(false);
            }}
            className="hover:text-orange-400"
          >
            Admin
          </button>
          {adminOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md z-50">
              <Link
                to="/admin-login"
                className="block px-4 py-2 hover:bg-orange-100"
                onClick={() => setAdminOpen(false)}
              >
                Admin Login
              </Link>
              <Link
                to="/admin-signup"
                className="block px-4 py-2 hover:bg-orange-100"
                onClick={() => setAdminOpen(false)}
              >
                Admin Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
