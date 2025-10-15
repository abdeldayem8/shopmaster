import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© 2025 ShopMaster. All rights reserved.</p>

        <div className="flex space-x-4 mt-3 md:mt-0">
          <FaFacebook className="hover:text-blue-500 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaTwitter className="hover:text-sky-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
