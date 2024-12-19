import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [expandedMenus, setExpandedMenus] = useState<{
    [key: string]: boolean;
  }>({});

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle resize to close sidebar on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = (menu: string) => {
    setExpandedMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsSidebarOpen(false); // Close sidebar on link click
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled
          ? "bg-black shadow-md border-b border-gray-700"
          : "bg-transparent border-b border-gray-500"
      }`}
    >
      {/* Top Bar */}
      {!isScrolled && (
        <div className="bg-gray-900 text-gray-400 text-sm py-1 px-20 flex justify-between items-center border-b border-gray-700">
          <span>The museum is open today 10 AM - 5 PM</span>
          <div className="flex space-x-4 items-center">
            <span>34th Ave, Queens, NY 11106</span>
            <span className="cursor-pointer">Search</span>
            <span className="cursor-pointer">English</span>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="container mx-auto px-6 lg:px-20 h-[70px] flex justify-between items-center border-b border-gray-500">
        {/* Left Links */}
        <nav className="hidden lg:flex space-x-0 h-full">
          {["Home", "Exhibitions", "Collections"].map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`flex items-center justify-center px-6 h-full transition-all duration-300 ${
                activeLink === link
                  ? "bg-black text-white"
                  : "text-gray-300 hover:bg-black hover:text-white"
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Logo */}
        <div className="text-3xl font-serif text-white flex justify-center lg:static absolute w-full lg:w-auto">
          <span>Lij</span> <span className="text-red-500">Temesgen</span>
        </div>

        {/* Right Links */}
        <nav className="hidden lg:flex space-x-0 h-full">
          {["Pages", "Blog", "Shop", "Contacts", "Visit"].map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`flex items-center justify-center px-6 h-full transition-all duration-300 ${
                activeLink === link
                  ? "bg-black text-white"
                  : "text-gray-300 hover:bg-black hover:text-white"
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div
          className="lg:hidden flex flex-col gap-1 cursor-pointer"
          onClick={toggleSidebar}
        >
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black z-50 p-6">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={toggleSidebar}
          >
            &times;
          </button>

          {/* Logo */}
          <div className="text-3xl font-serif text-white text-center mb-8">
            <span>Lij</span> <span className="text-red-500">Temesgen</span>
          </div>

          {/* Sidebar Links */}
          <ul className="space-y-6">
            {[
              { name: "Home", hasSubmenu: false },
              { name: "Pages", hasSubmenu: true },
              { name: "Blog", hasSubmenu: true },
              { name: "Shop", hasSubmenu: false },
              { name: "Contacts", hasSubmenu: false },
            ].map((link, idx) => (
              <li key={idx}>
                <div className="flex items-center justify-between">
                  <a
                    href={`#${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition-colors ${
                      activeLink === link.name ? "bg-gray-700 text-white" : ""
                    }`}
                    onClick={() => handleLinkClick(link.name)}
                  >
                    {link.name}
                  </a>
                  {link.hasSubmenu && (
                    <button
                      onClick={() => toggleMenu(link.name)}
                      className="text-gray-300 hover:text-white"
                    >
                      {expandedMenus[link.name] ? "▲" : "▼"}
                    </button>
                  )}
                </div>
                {link.hasSubmenu && expandedMenus[link.name] && (
                  <ul className="ml-4 mt-2 space-y-2">
                    <li>
                      <a
                        href="#submenu1"
                        className="block text-gray-300 hover:text-white"
                      >
                        Submenu 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#submenu2"
                        className="block text-gray-300 hover:text-white"
                      >
                        Submenu 2
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Search Bar and Social Icons */}
          <div className="mt-8 border-t border-gray-700 pt-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 px-4 bg-gray-800 text-gray-400 rounded-lg focus:outline-none mb-6"
            />
            <div className="flex justify-center space-x-4 text-yellow-500">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
