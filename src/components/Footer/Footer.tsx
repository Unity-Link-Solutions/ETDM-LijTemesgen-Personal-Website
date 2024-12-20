import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F1E18] text-white ">
      <div className="w-full h-12 bg-african-pattern-1 brightness-95 transition-opacity duration-500 hover:opacity-100 opacity-80 animate-pulse"></div>

      <div className="container mx-auto py-12 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-2xl font-bold text-red-500 mb-4">About</h4>
          <p className="text-gray-400 leading-relaxed">
            Lij Temesgen Melese, a celebrated choreographer, continues to
            inspire the world with his innovative Ethiopian Traditional Dance
            Music (ETDM).
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-2xl font-bold text-red-500 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-red-500 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/music"
                className="text-gray-400 hover:text-red-500 transition"
              >
                Music
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-gray-400 hover:text-red-500 transition"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/performances"
                className="text-gray-400 hover:text-red-500 transition"
              >
                Performances
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-red-500 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h4 className="text-2xl font-bold text-red-500 mb-4">
            Stay Connected
          </h4>
          <p className="text-gray-400 mb-4">
            Subscribe to get updates on new performances and events.
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 px-4 rounded bg-[#121212] text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition"
            >
              Subscribe
            </button>
          </form>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-red-500 transition text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-red-500 transition text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-red-500 transition text-2xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Lij Temesgen. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
