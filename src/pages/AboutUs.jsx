
import { FaTrophy, FaMedal, FaStar, FaAward, FaCode, FaLaptopCode, FaUsers, FaRegLightbulb } from "react-icons/fa";
import Faqs from "../components/Faqs";

const achievements = [
  { year: "2010", title: "Best Student Chapter Award", icon: <FaTrophy /> },
  { year: "2020", title: "Best Accredited Student Branch Award", icon: <FaAward /> },
  { year: "2020", title: "CSI Longest Continuous Student Branch Coordinator Award", icon: <FaStar /> },
  { year: "2020", title: "Best Committed Student Branch Activist Award", icon: <FaMedal /> },
];

const VivitsuFeature = ({ icon, title, description }) => (
  <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
    <div className="text-4xl text-blue-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const FSWObjective = ({ icon, text }) => (
  <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300">
    <div className="text-2xl text-blue-400">{icon}</div>
    <p className="text-white">{text}</p>
  </div>
);

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXZxMmd1YnFkcDBzNGQ5cDR4eGRvMjljNWk1NmZyZ3hubmV6MXE0byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTnxpQ3ghPiB2Hp6/giphy.gif"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Background Animation"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
            About <span className="text-blue-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mt-4 max-w-2xl mx-auto">
            Empowering Innovation, Fostering Collaboration, and Driving Technological Excellence
          </p>
        </div>
      </div>



      {/* Achievements Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl text-blue-400 mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <p className="text-gray-400 mb-2">{achievement.year}</p>
              <h3 className="text-white font-semibold">{achievement.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <Faqs />
      </div>
    </div>
  );
};

export default AboutUs;