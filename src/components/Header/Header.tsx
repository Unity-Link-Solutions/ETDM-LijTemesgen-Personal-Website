import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

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

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsSidebarOpen(false); // Close sidebar when a link is clicked
  };

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
        <div className="bg-darkGray text-lightGray text-sm py-1 px-10 flex justify-between items-center border-b border-gray-700">
          <span>Concert starts on 3 PM LT</span>
          <div className="flex space-x-4 items-center">
            <span>Addis Ababa. Bole, Millinium Hall</span>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="container mx-auto lg:px-10 h-[70px] flex justify-between items-center border-b border-gray-500">
        {/* Left Links */}
        <nav className="hidden lg:flex space-x-0 h-full">
          {["Home", "Exhibitions", "Collections"].map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`flex items-center justify-center px-6 h-full transition-all duration-300 ${
                activeLink === link
                  ? "text-primary"
                  : "text-lightGray hover:bg-secondary hover:text-primary"
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Logo */}
        <div className="text-3xl font-serif text-white flex justify-center lg:static absolute w-full lg:w-auto">
          <span>Lij</span> <span className="text-primary">Temesgen</span>
        </div>

        {/* Right Links */}
        <nav className="hidden lg:flex space-x-0 h-full">
          {["Pages", "Blog", "Shop", "Contacts", "Visit"].map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`flex items-center justify-center px-6 h-full transition-all duration-300 ${
                activeLink === link
                  ? "text-primary"
                  : "text-lightGray hover:bg-secondary hover:text-primary"
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div
          className="lg:hidden flex flex-col gap-1 cursor-pointer z-50"
          onClick={toggleSidebar}
        >
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 bg-dark z-40 p-6 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white text-3xl"
          onClick={toggleSidebar}
        >
          &times;
        </button>

        {/* Logo */}
        <div className="text-3xl font-serif text-white text-center mb-8">
          <span>Lij</span> <span className="text-primary">Temesgen</span>
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-6">
          {["Home", "Pages", "Blog", "Shop", "Contacts"].map((link, idx) => (
            <li key={idx}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className={`block text-lightGray hover:bg-secondary hover:text-primary px-4 py-2 rounded transition-colors ${
                  activeLink === link ? "text-primary" : ""
                }`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 px-4 bg-gray-800 text-lightGray rounded-lg focus:outline-none mb-6"
          />
          <div className="flex justify-center space-x-4 text-primary">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
