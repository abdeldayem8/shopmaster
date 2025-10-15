import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          ShopMaster
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/cart" className="hover:text-blue-600">Cart</Link>
          <Link to="/profile" className="hover:text-blue-600">Profile</Link>
        </nav>

        {/* Icons */}
        <div className="flex space-x-4 text-gray-700">
          <Link to="/cart" className="hover:text-blue-600">
            <FaShoppingCart size={20} />
          </Link>
          <Link to="/profile" className="hover:text-blue-600">
            <FaUser size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
