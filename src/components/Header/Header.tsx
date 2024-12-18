import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto p-5 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-red-500 transition">
            Lij Temesegen Melese
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-red-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/music" className="hover:text-red-500 transition">
                Music
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-red-500 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/merchandise" className="hover:text-red-500 transition">
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
