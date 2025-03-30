import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    setIsOpen(false); // Close the menu
    navigate(path); // Navigate to the new page
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? "bg-black/90 backdrop-blur-sm shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logos */}
          <div className="flex items-center space-x-4">
            <img 
              src="goka.jpeg" 
              alt="Logo 1" 
              className="h-12 transition-transform duration-300 hover:scale-105" 
            />
            <img 
              src="fsw_logo.png" 
              alt="Logo 2" 
              className="h-12 transition-transform duration-300 hover:scale-105" 
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className="text-3xl text-white" />
            ) : (
              <FaBars className="text-3xl text-white" />
            )}
          </button>

          {/* Navigation Links */}
          <ul
            className={`md:flex md:items-center md:space-x-6 text-lg fixed md:static top-0 right-0 w-64 md:w-auto h-screen md:h-auto transition-all duration-500 ease-in-out transform ${
              isOpen
                ? "translate-x-0 bg-black/95 backdrop-blur-sm shadow-2xl"
                : "translate-x-full md:translate-x-0"
            }`}
          >
            <div className="h-full md:h-auto flex flex-col md:flex-row items-start justify-center md:justify-start space-y-6 md:space-y-0 py-16 md:py-0 pl-8 md:pl-0">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Vivitsu", path: "/vivitsu" },
                { name: "Team", path: "/team" },
              ].map((item, index) => (
                <li key={index} className="relative group w-full md:w-auto">
                  <button
                    onClick={() => handleNavigation(item.path)} // Use handleNavigation
                    className="px-4 py-3 text-white hover:text-blue-400 transition-colors duration-300 text-xl md:text-base font-medium flex items-center"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10"></span>
                  </button>
                  {isOpen && index < 4 && (
                    <div className="w-full h-px bg-gray-700 mt-3 md:hidden"></div>
                  )}
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;