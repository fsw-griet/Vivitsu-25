import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      {/* Left Section: Logos */}
      <div className="flex items-center space-x-4">
        <img src="griet_logo.png" alt="Logo 1" className="h-12" />
        <img src="fsw_logo.png" alt="Logo 2" className="h-12" />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </div>

      {/* Right Section: Navigation Links */}
      <ul
        className={`md:flex md:space-x-8 text-gray-700 text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ease-in-out transform ${isOpen ? "block" : "hidden"} md:flex`}
      >
        <li className="hover:text-blue-600 hover:font-bold hover:text-xl transition-all duration-300 p-4 md:p-0">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-600 hover:font-bold hover:text-xl transition-all duration-300 p-4 md:p-0">
          <Link to="/about">About Us</Link>
        </li>
        <li className="hover:text-blue-600 hover:font-bold hover:text-xl transition-all duration-300 p-4 md:p-0">
          <Link to="/events">Events</Link>
        </li>
        <li className="hover:text-blue-600 hover:font-bold hover:text-xl transition-all duration-300 p-4 md:p-0">
          <Link to="/team">Team</Link>
        </li>
        <li className="hover:text-blue-600 hover:font-bold hover:text-xl transition-all duration-300 p-4 md:p-0">
          <Link to="/magazines">Magazines</Link>
        </li>
        <li className="hover:text-blue-600 hover:font-bold hover:text-xl transition-all duration-300 p-4 md:p-0">
          <Link to="/join-us">Join Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;