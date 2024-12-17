import React from "react";

const Header = () => {
  return (
    <header className="p-5 bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Artist Name</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Music</a></li>
            <li><a href="#" className="hover:text-gray-400">Events</a></li>
            <li><a href="#" className="hover:text-gray-400">Merchandise</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
