

import  { useState } from "react";
import { Menu, X } from "lucide-react"; 
import log from "../assets/cardmon_log.png";
import { Link } from "react-router-dom";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Section names for scrolling
  const navItems = [
    { label: "Home", link: "/" },
    { label: "About us", link: "/about" },
    { label: "Cardamom", link: "/cardamom" },
    { label: "Gallery", link: "/gallery" },
    { label: "Contact us", link: "/contact" }
  ];


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* 🔰 Logo Section */}
          <a
            href="#home"
            smooth={true}
            duration={200}
            offset={-5}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={log}
              alt="IMTCP Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                IMCPC
              </h1>
              <p className="text-[10px] sm:text-xs text-black leading-tight">
                Idukki Mahila Cardamom Producer
              </p>
            </div>
          </a>

          {/* 💻 Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  offset={-80} // adjust for navbar height
                  className="cursor-pointer hover:text-lime-600 hover:underline underline-offset-4 transition duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* 📱 Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <ul className="flex flex-col items-center bg-yellow-400 py-3 space-y-3 text-black font-medium border-t border-gray-200 shadow-md">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.link}

                className="block px-3 py-2 cursor-pointer hover:text-green-700 hover:underline underline-offset-4"
              >
                {item.label}
              </Link>

            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

