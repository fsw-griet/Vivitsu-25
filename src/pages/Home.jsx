import { motion } from "framer-motion";
import { LampContainer } from "../components/Lamplight";
import { EvervaultCard } from "../components/evalcard";
import { Boxes } from "../components/Retro";
import { FaFilePdf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './App.css';
const Home = () => {
  const navigate = useNavigate();
  const typewriterStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    display: "inline-block",
    animation: "typewriter 4s steps(22) 1s 1 normal both",
    fontWeight: "bold",
    fontSize: "4rem",
    color: "white",
  };

  const handlePastEventsClick = () => {
    navigate('/events');
  };

  const handleCoreCommitteeClick = () => {
    navigate('/team');
  };

  const handleVivitsuClick = () => {
    navigate('/vivitsu');
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Boxes />
        </div>

        <div className="relative z-10 flex items-center justify-between w-full pl-20 mt-80">
          <img src="fsw_logo.png" alt="Software Logo" className="h-80 w-80 object-cover" />
          <div className="flex items-center justify-center ml-10 mr-20">
            <h1
              className="font-mono"
              style={{
                ...typewriterStyle,
                fontFamily: 'Lucida Console',
                textShadow: '0 0 5px #00bfff, 0 0 10px #00bfff, 0 0 20px #00bfff, 0 0 40px #00f, 0 0 60px #00f',
                color: '#fff',
              }}
            >
              FREE SOFTWARE WING
            </h1>
          </div>
        </div>
        <p className="mt-2 text-lg text-white overflow-hidden">
          Promoting open-source innovation, collaboration, and software freedom.
        </p>
      </div>

      {/* Who We Are Section */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-16 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl mb-30"
        >
          WHO ARE WE?
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-center gap-20 p-10 w-full max-w-6xl mx-auto">
          <div className="bg-gray-800 shadow-lg p-6 rounded-lg flex-1 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-blue-400">VISION</h3>
            <p className="text-gray-300 mt-2">
              To revolutionize the technology landscape by providing cutting-edge solutions that empower businesses to thrive in the digital era.
            </p>
          </div>
          <div className="bg-gray-800 shadow-lg p-6 rounded-lg flex-1 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-blue-400">MISSION</h3>
            <p className="text-gray-300 mt-2">
              Our mission is to deliver exceptional tech solutions that address complex challenges with simplicity and elegance.
            </p>
          </div>
        </div>
      </LampContainer>

      {/* Our Team Section */}
      <div className="bg-gradient-to-b from-black to-gray-900 py-20 text-white w-full overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center max-w-6xl px-6">
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold">OUR TEAM</h2>
            <div className="w-16 h-1 bg-blue-500 mt-2"></div>
            <p className="text-gray-300 mt-4 text-lg">
              Meet the passionate individuals driving innovation and excellence.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center hover:scale-105 transition-transform duration-300">
            <img
              src="group_pic.jpg"
              alt="Team"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>

      <br />
      <br />
      
      {/* Circle section */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          padding: '30px 30px',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: '80%',
            maxWidth: '1600px',
            padding: '30px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: '120px',
            }}
          >
            {[
              { text: 'Past Events', onClick: handlePastEventsClick },
              { text: 'Core Committee', onClick: handleCoreCommitteeClick },
              { text: 'Vivitsu', onClick: handleVivitsuClick }
            ].map((item, index) => (
              <div 
                key={index}
                onClick={item.onClick}
                className="circle-container" 
                style={{ 
                  position: 'relative', 
                  width: '22.5rem', 
                  height: '22.5rem', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <div className="glowing-border"></div>
                <div className="circle-inner">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
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
            font-size: 1.5rem;
            font-weight: bold;
            color:rgb(245, 245, 245);
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
        `}</style>
      </div>
      <EvervaultCard className="bg-white/10 p-2 rounded-2xl shadow-lg text-center max-w-3xl mx-auto mt-16 mb-10">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-transparent backdrop-blur-md text-white p-8 rounded-xl shadow-lg border border-gray-700 max-w-xl mx-auto my-16 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-4">FSW Annual Report</h2>
        <p className="text-gray-300 mb-4">
          Stay updated with our latest achievements and initiatives. Click below to view the full report.
        </p>
        <a
          href="https://www.griet.ac.in/2024/FSW%20Report%202023-2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="FSW_Annual_Report.pdf"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <FaFilePdf className="mr-2 text-2xl" />
          View Report
        </a>
      </motion.div>
      </EvervaultCard>

      {/* Join Community Section */}
      <EvervaultCard className="bg-white/10 p-2 rounded-2xl shadow-lg text-center max-w-3xl mx-auto mt-16 mb-10">
        <div className="flex flex-col items-center space-y-4 p-10">
          <h2 className="text-3xl font-bold text-white">FSW OSC COMMUNITY</h2>
          <p className="text-gray-300 text-center">
            Join our growing community of tech enthusiasts and developers. Create projects using open source tools and contribute to real time open source projects.
          </p>
          <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition hover:scale-105 active:scale-95">
            JOIN US NOW
          </button>
        </div>
      </EvervaultCard>
    </>
  );
};

export default Home;
