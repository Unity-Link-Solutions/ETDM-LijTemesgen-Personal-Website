import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener to toggle background color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change header style after scrolling 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto p-5 flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-red-600 transition">
            <span className="text-red-600 font-extrabold text-4xl italic">Lij</span> 
            <span className="font-light text-4xl"> Temesegen Melese</span>
          </Link>
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-red-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/music" className="hover:text-red-600 transition">
                Music
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-red-600 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/merchandise" className="hover:text-red-600 transition">
                Merchandise
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
