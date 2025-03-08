import { motion } from "framer-motion";
import { LampContainer } from "../components/Lamplight";
import { EvervaultCard } from "../components/evalcard";
import { Boxes } from "../components/Retro";
import './App.css';
const Home = () => {
  const typewriterStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    display: "inline-block",
    animation: "typewriter 4s steps(22) 1s 1 normal both",
    fontWeight: "bold",
    fontSize: "4rem", // Adjust the font size as needed
    color: "white", // Ensure the text color is visible
  };

  return (
    <>
     <div className="relative w-full h-screen overflow-hidden text-center">
        {/* Place the Boxes behind the content */}
        <div className="absolute inset-0 z-0">
          <Boxes />
        </div>

        <div className="relative z-10 flex items-center justify-between w-full pl-20 mt-80">
  <img src="fsw_logo.png" alt="Software Logo" className="h-80 w-80 object-cover" />

  {/* Logo and Heading */}
  <div className="flex items-center justify-center ml-10 mr-20">
    <h1
      className="font-mono"
      style={{
        ...typewriterStyle,
        fontFamily: 'Lucida Console',
        textShadow: '0 0 5px #00bfff, 0 0 10px #00bfff, 0 0 20px #00bfff, 0 0 40px #00f, 0 0 60px #00f', // Neon glow effect
        color: '#fff', // White color for the text
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
          {/* Vision Card */}
          <div className="bg-gray-800 shadow-lg p-6 rounded-lg flex-1 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-blue-400">VISION</h3>
            <p className="text-gray-300 mt-2">
              To revolutionize the technology landscape by providing cutting-edge solutions that empower businesses to thrive in the digital era.
            </p>
          </div>

          {/* Mission Card */}
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

<br></br>
<br></br>
{/* Circle section */}
      
      <div className="relative w-full flex justify-center items-center overflow-hidden pb-30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[60vh] bg-gradient-to-b from-blue-300 to-blue-700 rounded-full flex justify-center items-center"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center w-[80%] max-w-6xl px-6 pt-25">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-90 h-90 bg-white rounded-full flex justify-center items-center shadow-lg text-lg font-bold text-blue-700">
            Past Events
          </div>
          <div className="w-90 h-90 bg-white rounded-full flex justify-center items-center shadow-lg text-lg font-bold text-blue-700">
            Core Committee
          </div>
          <div className="w-90 h-90 bg-white rounded-full flex justify-center items-center shadow-lg text-lg font-bold text-blue-700">
            Vivitsu
          </div>
        </div>
      </div>
    </div>
          

          
      {/* Join Community Section */}
      <EvervaultCard className="bg-white/10 p-2 rounded-2xl shadow-lg text-center max-w-3xl mx-auto mt-16 mb-10">
        <div className="flex flex-col items-center space-y-4 p-10">
          <h2 className="text-3xl font-bold text-blue-400">FSW COMMUNITY</h2>
          <p className="text-gray-300 text-center">
            Join our growing community of tech enthusiasts and developers.
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
