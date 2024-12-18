// import React from "react";
// import { colors } from "../../theme/colors"; // Importing theme colors

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-[colors.primary]">
            About the Artist
          </h2>
          <p className="mt-2 text-gray-400">
            Discover the pioneer of Ethiopian Traditional Dance Music (ETDM) and
            their journey to connect culture with global music.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-2xl font-bold text-[colors.primary]">
            Quick Links
          </h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-[colors.primary] transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[colors.primary] transition duration-300"
              >
                Music
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[colors.primary] transition duration-300"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[colors.primary] transition duration-300"
              >
                Merchandise
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[colors.primary] transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-2xl font-bold text-[colors.primary]">
            Connect With Us
          </h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[colors.primary] transition duration-300"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[colors.primary] transition duration-300"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-[colors.primary] transition duration-300"
            >
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-4 py-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Artist Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
