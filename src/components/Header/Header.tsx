import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Determine active link dynamically
  const activeLink = location.pathname.replace("/", "") || "Home";

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close sidebar when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled
          ? "bg-dark shadow-md border-b border-gray-700"
          : "bg-transparent border-b border-gray-500"
      }`}
    >
      {/* Top Bar */}
      {!isScrolled && (
        <div className="bg-[#1C1C1C] text-white text-sm py-1 px-10 flex justify-between items-center border-b border-gray-700 lg:flex hidden">
          {/* Left Side */}
          <span className="tracking-wide font-medium">
            🎤 Concert starts at <span className="text-red-500">3 PM LT</span>
          </span>

          {/* Right Side */}
          <div className="flex items-center">
            {/* Custom Location Icon */}
            <div className="w-4 h-3 flex items-center justify-center bg-transparent rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-3 h-5 text-[#D3D3D3]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8.686 2 6 4.686 6 8c0 3.314 5 10 6 11s6-7.686 6-11c0-3.314-2.686-6-6-6z"
                />
                <circle cx="12" cy="8" r="2" fill="currentColor" />
              </svg>
            </div>

            {/* Location Text */}
            <div className="text-gray-300">
              <span className="font-medium">Addis Ababa</span>
              <span className="mx-1 text-gray-500">|</span>
              <span>Bole, Millenium Hall</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="container mx-auto lg:px-10 h-[70px] flex justify-between items-center border-b border-gray-500">
        {/* Left Links */}
        <nav className="hidden lg:flex space-x-0 h-full">
          {["Home", "Journey", "Events"].map((link, idx) => (
            <a
              key={idx}
              href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`flex items-center justify-center px-6 h-full transition-all duration-300 ${
                activeLink.toLowerCase() === link.toLowerCase()
                  ? "text-primary"
                  : "text-lightGray hover:bg-secondary hover:text-primary"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Logo */}
        <div className="text-3xl font-serif text-white flex sm:justify-end justify-center absolute sm:static w-full sm:w-auto right-8 sm:right-0">
          <span>Lij</span> <span className="text-primary">Temesgen Melese</span>
        </div>

        {/* Right Links */}
        <nav className="hidden lg:flex space-x-0 h-full">
          {["Contacts", "ETDM"].map((link, idx) => (
            <a
              key={idx}
              href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`flex items-center justify-center px-6 h-full transition-all duration-300 ${
                activeLink.toLowerCase() === link.toLowerCase()
                  ? "text-primary"
                  : "text-lightGray hover:bg-secondary hover:text-primary"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div
          className="lg:hidden absolute right-8 top-4 flex items-center cursor-pointer z-50"
          onClick={toggleSidebar}
        >
          <div className="relative w-10 h-10 flex justify-center items-center">
            {isSidebarOpen ? (
              // "X" Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 28 28"
                strokeWidth="2"
                stroke="currentColor"
                className="w-10 h-10 text-white transition duration-300 ease-in-out transform rotate-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8 text-white transition duration-300 ease-in-out transform rotate-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 bg-dark z-40 p-6 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Logo */}
        <div className="text-3xl font-serif text-white text-center mt-10 mb-8">
          <span>Lij</span> <span className="text-primary">Temesgen Melese</span>
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-6">
          {[
            "Home",
            "Events",
            // "Blog",
            "Merchandise",
            "Contacts",
          ].map((link, idx) => (
            <li key={idx}>
              <a
                href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                className={`block text-lightGray hover:bg-secondary hover:text-primary px-4 py-2 rounded transition-colors ${
                  activeLink.toLowerCase() === link.toLowerCase()
                    ? "text-primary"
                    : ""
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
