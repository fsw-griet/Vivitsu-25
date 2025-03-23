import  { useState } from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BowlingEffect = () => {
  const [ballRolling, setBallRolling] = useState(false);
  const [pinsFalling, setPinsFalling] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    if (!ballRolling) {
      setBallRolling(true);
      setTimeout(() => setPinsFalling(true), 2000);
      setTimeout(() => setShowText(true), 3000);
      setTimeout(() => {
        setBallRolling(false);
        setPinsFalling(false);
        setShowText(false);
      }, 5000);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {/* Bowling Ball */}
      <motion.div
        initial={{ x: -300, y: 200 }}
        animate={ballRolling ? { x: 0, y: -250 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: "#444",
          borderRadius: "50%",
          position: "absolute",
          bottom: "50px",
          left: "50%",
          transform: "translateX(-50%)",
          boxShadow: "0px 0px 15px white",
        }}
      />

      {/* Bowling Pins */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "150px",
          display: "flex",
          gap: "20px",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, rotate: 0 }}
            animate={pinsFalling ? { y: 50, rotate: 45, opacity: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              width: "30px",
              height: "100px",
              backgroundColor: "white",
              borderRadius: "10px",
              border: "2px solid red",
            }}
          />
        ))}
      </motion.div>

      {/* SMAAASH Text */}
      {showText && (
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            color: "red",
            fontSize: "4rem",
            fontWeight: "bold",
            textShadow: "0px 0px 10px white",
          }}
        >
          SMAAASH!
        </motion.h1>
      )}
    </div>
  );
};

export default BowlingEffect;