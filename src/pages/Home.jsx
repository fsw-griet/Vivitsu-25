import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { LampContainer } from "../components/Lamplight";
import { EvervaultCard } from "../components/evalcard";
import { Boxes } from "../components/Retro";
import { FaFilePdf } from "react-icons/fa";
import { FaCode, FaUsers, FaRegLightbulb, FaLaptopCode } from "react-icons/fa";
import "./App.css";

const FSWObjective = ({ icon, text }) => (
  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300">
    <div className="text-2xl text-blue-400">{icon}</div>
    <p className="text-white">{text}</p>
  </div>
);

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState("");
  const fullText = "FREE SOFTWARE WING";
  const fswSectionRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    let currentIndex = 0;

    const typeText = () => {
      if (isMounted && currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
        setTimeout(typeText, 100);
      }
    };

    typeText();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (location.state?.scrollToFSW && fswSectionRef.current) {
      fswSectionRef.current.scrollIntoView({ behavior: "smooth" });

      // Clear the state to prevent repeated scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handlePastEventsClick = () => {
    navigate("/events");
  };

  const handleCoreCommitteeClick = () => {
    navigate("/team");
  };

  const handleVivitsuClick = () => {
    navigate("/vivitsu");
  };

  return (
    <>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Hero Section - Responsive Layout */}
      <div className="relative w-full h-screen overflow-hidden text-center">
        <div className="absolute inset-0 z-0">{/* <Boxes /> */}</div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between w-full md:pl-20 mt-40 md:mt-80 px-4 md:px-0">
          <div className="flex justify-center w-full md:w-auto mb-6 md:mb-0">
            <img
              src="fsw_logo.png"
              alt="Software Logo"
              className="h-40 w-40 md:h-60 md:w-60 lg:h-96 lg:w-96 object-cover rounded-sm"
              style={{
                maxWidth: "200px",
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <div className="flex items-center justify-center w-full md:ml-10 md:mr-20">
            <h1
              className="font-mono"
              style={{
                fontFamily: "Lucida Console",
                textShadow:
                  "0 0 5px #00bfff, 0 0 10px #00bfff, 0 0 20px #00bfff, 0 0 40px #00f, 0 0 60px #00f",
                color: "#fff",
                fontSize: "clamp(1.5rem, 5vw, 4rem)",
                whiteSpace: "nowrap",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {displayText}
              <span className="typing-cursor">|</span>
            </h1>
          </div>
        </div>

        <p className="mt-2 text-base md:text-lg text-white text-center px-4">
          Promoting open-source innovation, collaboration, and software freedom.
        </p>
      </div>

      {/* FSW Section */}
      <div
        ref={fswSectionRef}
        id="fsw-section"
        className="bg-gradient-to-b from-black to-gray-900 py-12 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
              <div className="flex items-center mb-6">
                <img
                  src="fsw_logo.png"
                  alt="FSW Logo"
                  className="w-24 h-24 mr-6 rounded-full"
                />
                <h2 className="text-4xl font-bold text-white">FSW</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Free Software Wing (FSW) is a dynamic technical student body at
                GRIET, dedicated to promoting Free and Open Source Software
                (FOSS) culture. We're passionate about creating awareness,
                fostering innovation, and empowering students through
                technology.
              </p>
              <div className="space-y-4">
                <FSWObjective
                  icon={<FaCode />}
                  text="Promote FOSS usage and benefits among students"
                />
                <FSWObjective
                  icon={<FaUsers />}
                  text="Encourage student contributions to FOSS community"
                />
                <FSWObjective
                  icon={<FaRegLightbulb />}
                  text="Provide platform for learning and collaboration"
                />
                <FSWObjective
                  icon={<FaLaptopCode />}
                  text="Foster innovation and creativity in tech"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">
                    Technical Empowerment
                  </h4>
                  <p className="text-gray-300">
                    Equip students with cutting-edge technological skills
                    through workshops, seminars, and hands-on learning
                    experiences.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">
                    Community Collaboration
                  </h4>
                  <p className="text-gray-300">
                    Build a vibrant community of tech enthusiasts who
                    collaborate, share knowledge, and drive technological
                    innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section - Responsive */}
      <div className="bg-gradient-to-b from-black to-gray-900 py-12 md:py-20 text-white w-full overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center max-w-6xl px-4 md:px-6 space-y-6 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">OUR TEAM</h2>
            <div className="w-16 h-1 bg-blue-500 mt-2 mx-auto md:mx-0"></div>
            <p className="text-gray-300 mt-4 text-base md:text-lg">
              Meet the passionate individuals driving innovation and excellence.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center hover:scale-105 transition-transform duration-300">
            <img
              src="group_pic.jpg"
              alt="Team"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Card Section - Responsive */}
      <div className="w-full px-4 py-12 md:py-20 flex justify-center items-center">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {[
              { text: "Past Events", onClick: handlePastEventsClick },
              { text: "Core Committee", onClick: handleCoreCommitteeClick },
              { text: "Vivitsu", onClick: handleVivitsuClick },
            ].map((item, index) => (
              <div
                key={index}
                onClick={item.onClick}
                className="bg-white/10 p-8 rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 text-center">
                  {item.text}
                </h3>
                <p className="text-gray-300 text-center text-lg">
                  Click to explore more about {item.text.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Annual Report Section - Responsive with Dropdown */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-transparent backdrop-blur-md text-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-700 max-w-xl mx-5 md:mx-auto my-10 md:my-16 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          FSW Annual Reports
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-4">
          Explore our achievements and initiatives through the years.
        </p>
        
        <div className="relative inline-block w-full max-w-xs">
          <select
            className="block appearance-none w-full bg-gray-800 border border-gray-700 text-white py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
            onChange={(e) => {
              if (e.target.value) {
                window.open(e.target.value, '_blank');
              }
            }}
          >
            <option value="">Select a year</option>
            <option value="https://www.griet.ac.in/2024/FSW%20Report%202023-2024.pdf">
              2023-2024
            </option>
            <option value="https://www.griet.ac.in/2023/FSW%20Report%202022-2023.pdf">
              2022-2023
            </option>
            <option value="https://www.griet.ac.in/2022/FSW%20REPORT%202021-2022.pdf">
              2021-2022
            </option>
            <option value="https://www.griet.ac.in/images/FSWReport%202020-21.pdf">
              2020-2021
            </option>
            {/* Add more years as needed */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>

  <p className="text-sm text-gray-400 mt-2">
    Or download the latest report directly:
  </p>
  <a
    href="https://www.griet.ac.in/2024/FSW%20Report%202023-2024.pdf"
    target="_blank"
    rel="noopener noreferrer"
    download="FSW_Annual_Report_2023-2024.pdf"
    className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white font-bold text-base md:text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 mt-2"
  >
    <FaFilePdf className="mr-2 text-xl md:text-2xl" />
    Download Latest Report
  </a>
</motion.div>

      {/* Join Community Section - Responsive */}
      <EvervaultCard className="bg-white/10 p-2 rounded-2xl shadow-lg text-center max-w-3xl mx-auto my-10">
        <div className="flex flex-col items-center space-y-4 mx-5 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            FSW OSC COMMUNITY
          </h2>
          <p className="text-sm md:text-base text-gray-300 text-center max-w-xl">
            Join our growing community of tech enthusiasts and developers.
            Create projects using open source tools and contribute to real time
            open source projects.
          </p>
          <button className="bg-blue-500 text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:bg-blue-600 transition hover:scale-105 active:scale-95">
            JOIN US NOW
          </button>
        </div>
      </EvervaultCard>

      <style>{`
        .typing-cursor {
          animation: blink 0.7s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .circle-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .glowing-border {
          position: absolute;
          width: calc(100% + 20px);
          height: calc(100% + 20px);
          border-radius: 50%;
          background: transparent;
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.8), 0 0 50px rgba(0, 255, 255, 0.6);
          animation: electric-waves 2s infinite linear;
          filter: blur(6px);
        }
        
        .circle-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.4) 20%, rgba(0, 0, 255, 0.1) 80%);
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          color: rgb(245, 245, 245);
          transition: transform 0.3s ease;
        }

        .circle-container:hover .circle-inner {
          transform: scale(1.05);
        }

        .circle-container:hover .glowing-border {
          box-shadow: 0 0 40px rgba(0, 255, 255, 1), 0 0 60px rgba(0, 255, 255, 0.9);
        }

        @keyframes electric-waves {
          0%, 100% {
            box-shadow: 0 0 30px rgba(0, 255, 255, 0.8), 0 0 50px rgba(0, 255, 255, 0.6);
          }
          50% {
            box-shadow: 0 0 40px rgba(0, 255, 255, 1), 0 0 60px rgba(0, 255, 255, 0.9);
          }
        }

        @media (max-width: 640px) {
          .circle-container {
            width: 10rem;
            height: 10rem;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
