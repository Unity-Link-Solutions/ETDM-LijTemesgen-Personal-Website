import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ETDM Artist</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-red-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/music" className="hover:text-red-600">
                Music
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-red-600">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/merchandise" className="hover:text-red-600">
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
