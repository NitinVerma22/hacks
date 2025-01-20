import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";  // Import Link for internal navigation
import logo from "../images/logo.jpeg";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Circular Image with Bottom Text (Visible only on mobile/tablet) */}
      <div className="flex flex-col items-center justify-center mt-10">
        <img
          src={logo}
          alt="Hack Mods"
          className="rounded-full border-4 border-green-400 size-24"
        />
      </div>
      <h1 className="text-green-600 text-4xl text-center font-extrabold mt-2 tracking-wide">
        Hack Mods
      </h1>

      {/* Sidebar Icon */}
      <button
        className="fixed left-4 top-4 z-50 text-white bg-gray-800 p-2 rounded-md"
        onClick={() => setIsSidebarOpen(true)}
      >
        <FaBars size={30} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-green-400">Hack Mods</h2>
          <button onClick={() => setIsSidebarOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex flex-col mt-4">
          <Link
            to="/"
            className="block py-4 px-6 text-lg font-medium hover:bg-green-500 hover:text-black transition-all duration-300"
            onClick={() => setIsSidebarOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/rummy"
            className="block py-4 px-6 text-lg font-medium hover:bg-green-500 hover:text-black transition-all duration-300"
            onClick={() => setIsSidebarOpen(false)}
          >
            Rummy Hack
          </Link>
         
          <Link
            to="/color"
            className="block py-4 px-6 text-lg font-medium hover:bg-green-500 hover:text-black transition-all duration-300"
            onClick={() => setIsSidebarOpen(false)}
          >
            Color Prediction Hack
          </Link>
          <a
            href="https://m.indiamart.com/proddetail/2851858860897.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=10
"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-4 px-6 text-lg font-medium hover:bg-green-500 hover:text-black transition-all duration-300"
          >
            Aviator
          </a>
          <a
            href="https://m.indiamart.com/proddetail/2851858860897.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=10
"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-4 px-6 text-lg font-medium hover:bg-green-500 hover:text-black transition-all duration-300"
          >
            1x Bet Hack
          </a>
          <a
            href="https://m.indiamart.com/impcat/m2m-sim-card.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=9
"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-4 px-6 text-lg font-medium hover:bg-green-500 hover:text-black transition-all duration-300"
          >
            Contact Us
          </a>
          <a
            href="https://m.indiamart.com/proddetail/2853100893497.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=11
"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-4 px-6 text-lg font-medium hover:bg-green-500 hover:text-black transition-all duration-300"
          >
            About
          </a>
        </nav>
      </aside>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;
