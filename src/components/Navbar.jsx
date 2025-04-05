import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const handleNavigation = (path, state = {}) => {
    setIsOpen(false);
    navigate(path, { state });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? "bg-black/60 backdrop-blur-sm shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* GRIET Logo on the left */}
          <div
            className="cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <img
              src="goka.jpeg"
              alt="GRIET Logo"
              className="h-12 rounded-sm"
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

          {/* Navigation Links and FSW Logo Container */}
          <div className="hidden md:flex items-center">
            {/* Navigation Links */}
            <ul className="flex items-center space-x-6 text-lg">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/", state: { scrollToFSW: true } },
                { name: "Events", path: "/events" },
                { name: "Vivitsu", path: "/vivitsu" },
                { name: "Team", path: "/team" },
              ].map((item, index) => (
                <li key={index} className="relative group">
                  <button
                    onClick={() => handleNavigation(item.path, item.state)}
                    className="px-4 py-3 text-white hover:text-blue-400 transition-colors duration-300 text-base font-medium flex items-center"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10"></span>
                  </button>
                </li>
              ))}
            </ul>

            {/* FSW Logo on the far right */}
            <div
              className="ml-6 cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              <img
                src="fsw_logo.png"
                alt="FSW Logo"
                className="h-12 rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden fixed top-0 right-0 w-64 h-screen transition-all duration-500 ease-in-out transform ${
            isOpen
              ? "translate-x-0 bg-black/95 backdrop-blur-sm shadow-2xl"
              : "translate-x-full"
          }`}
          style={{ paddingTop: "5rem" }}
        >
          <div className="h-full flex flex-col items-start space-y-6 pl-8 pt-8">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/", state: { scrollToFSW: true } },
              { name: "Events", path: "/events" },
              { name: "Vivitsu", path: "/vivitsu" },
              { name: "Team", path: "/team" },
            ].map((item, index) => (
              <li key={index} className="relative group w-full">
                <button
                  onClick={() => handleNavigation(item.path, item.state)}
                  className="px-4 py-3 text-white hover:text-blue-400 transition-colors duration-300 text-xl font-medium flex items-center"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10"></span>
                </button>
                {index < 4 && (
                  <div className="w-full h-px bg-gray-700 mt-3"></div>
                )}
              </li>
            ))}
          </div>
        </ul>
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