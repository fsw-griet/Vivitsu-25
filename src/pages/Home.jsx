import React from "react";
import TestimonialSlider from "../components/TestimonialSlider";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-20 py-10 px-5 w-full bg-gradient-to-b from-blue-500 to-white">
        <div className="flex flex-col items-center w-full h-screen/2">
          <div className="flex flex-col items-center py-10 px-5 mt-20 w-full">
            <div className="text-center mb-10 w-full">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                FSW GRIET
              </h1>
              <div className="w-20 h-1 bg-[#2196f3] rounded-2xl mx-auto mt-2 transition-all duration-300 hover:w-32"></div>
            </div>
          </div>
        </div>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">WHO WE ARE?</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-2xl mt-2 transition-all duration-300 hover:w-32"></div>
        </div>

        <div className="who are we?">
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Vision Card */}
            <div className="bg-gray-100 shadow-lg p-6 rounded-lg max-w-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900">VISION</h3>
              <p className="text-gray-700 mt-2">
                To revolutionize the technology landscape by providing
                cutting-edge solutions that empower businesses to thrive in the
                digital era. We envision a world where technology seamlessly
                integrates with everyday operations, enhancing efficiency and
                driving innovation.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gray-100 shadow-lg p-6 rounded-lg max-w-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900">MISSION</h3>
              <p className="text-gray-700 mt-2">
                Our mission is to deliver exceptional tech solutions that
                address complex challenges with simplicity and elegance. We are
                committed to maintaining the highest standards of security,
                reliability, and performance while fostering long-term
                partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white to-blue-500">
        <div className="group pic">
          <div className="container m-5 p-5 mx-auto flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="md:w-1/2 text-left">
              <h2 className="text-4xl font-bold text-gray-900">OUR TEAM</h2>
              <div className="w-16 h-1 bg-red-600 ml-2 rounded-2xl mt-2 hover:w-32 transition-all duration-300"></div>
              <p className="text-gray-700 mt-4 text-lg">
                Meet the passionate individuals driving innovation and
                excellence. Our team is dedicated to delivering outstanding
                solutions and shaping the future of technology.
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center hover:scale-105 transition-transform duration-300">
              <img
                src="group_pic.jpg"
                alt="Team"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
        <div className="join OSC">
          <div className="p-5 py-16 flex justify-center">
            <div className="bg-white/90 p-8 rounded-2xl shadow-lg text-center max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                FSW COMMUNITY
              </h2>
              <p className="mt-4 text-gray-600">
                Join our growing community of tech enthusiasts, developers, and
                industry experts. Share knowledge, collaborate on projects, and
                stay updated with the latest trends.
              </p>
              <button className="mt-6 bg-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition hover:scale-105 active:scale-95">
                JOIN US NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
