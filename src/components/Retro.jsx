"use client";
import React from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

export const BoxesCore = ({ className, ...rest }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  let colors = [
    "#7dd3fc", "#f9a8d4", "#86efac", "#fde047", "#f87171",
    "#c084fc", "#60a5fa", "#818cf8", "#a78bfa",
  ];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      initial={{ rotateX: 30, rotateY: 30 }}
      animate={{ rotateX: [30, 40, 30], rotateY: [30, 20, 30] }}
      transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      style={{
        position: "absolute",
        left: "25%",
        top: "-25%",
        padding: "1rem",
        display: "flex",
        width: "100%",
        height: "100%",
        zIndex: 0,
        transform: "translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)",
        background: "radial-gradient(circle, rgba(0, 102, 255, 0.5) 0%, rgba(0, 0, 128, 0.3) 100%)",
        boxShadow: "0px 0px 20px 5px rgba(0, 102, 255, 0.75)",
      }}
      className={className}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div key={`row${i}`} style={{ width: "4rem", height: "2rem", borderLeft: "1px solid rgba(0, 102, 255, 0.75)", position: "relative" }}>
          {cols.map((_, j) => (
            <motion.div
              whileHover={{ backgroundColor: getRandomColor(), transition: { duration: 0 } }}
              animate={{ transition: { duration: 2 } }}
              key={`col${j}`}
              style={{ 
                width: "4rem", 
                height: "2rem", 
                borderRight: "1px solid rgba(0, 102, 255, 0.75)", 
                borderTop: "1px solid rgba(0, 102, 255, 0.75)", 
                position: "relative", 
                boxShadow: "0px 0px 10px rgba(0, 102, 255, 0.5)",
              }}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  style={{ 
                    position: "absolute", 
                    height: "1.5rem", 
                    width: "2.5rem", 
                    top: "-14px", 
                    left: "-22px", 
                    color: "rgba(0, 102, 255, 0.75)", 
                    strokeWidth: 1,
                    filter: "drop-shadow(0px 0px 5px rgba(0, 102, 255, 0.75))"
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

BoxesCore.propTypes = {
  className: PropTypes.string,
  top: PropTypes.number,
  glow: PropTypes.bool,
  colour: PropTypes.string,
  angle: PropTypes.number,
  spacing: PropTypes.number,
  gap: PropTypes.number,
  position: PropTypes.oneOf(["fixed", "absolute", "relative", "static", "sticky"]),
  zIndex: PropTypes.number,
  linearY: PropTypes.bool,
};

export const Boxes = React.memo(BoxesCore);
