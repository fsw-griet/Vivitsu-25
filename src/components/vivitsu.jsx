import { useEffect, useState } from "react";
/*import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";*/

export default function Vivitsu() {
  /*const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: "#007bff", // Soft neon blue
      highlightColor: "#007bff", // Glow in neon blue
      backgroundAlpha: 0.0, // Fully transparent background
      maxDistance: 18.0, // Ensures good connectivity
      spacing: 14.0, // More lines, less empty space
      showDots: false, // No distracting dots
      THREE: THREE, // Ensure Three.js is provided
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="title">
      <div className="title1">
        <h1>
          <span>V</span>
          <span>I</span>
          <span>V</span>
          <span>I</span>
          <span>T</span>
          <span>S</span>
          <span>U</span>
          <span>-</span>
          <span>2</span>
          <span>5</span>
        </h1>
      </div>
      <div className="button-wrapper">
        <button className="cta">Register</button>
      </div>
    </div>
  );*/
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const numColumns = Math.floor(window.innerWidth / 20);
    setColumns(new Array(numColumns).fill(0));
  }, []);

  const getRandomChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    return chars[Math.floor(Math.random() * chars.length)];
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", backgroundColor: "transparent", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      {columns.map((_, index) => (
        <div
          key={index}
          className="falling-code"
          style={{
            position: "absolute",
            top: 0,
            left: `${index * 20}px`,
            color: "#00FFFF", /* Neon Blue */
            fontSize: "18px",
            textShadow: "0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 20px #00FFFF", /* Neon Glow Effect */
            animation: `fall ${2 + Math.random() * 3}s linear infinite`
          }}
        >
          {new Array(15).fill(0).map(() => (
            <div key={Math.random()}>{getRandomChar()}</div>
          ))}
        </div>
      ))}
      <div style={{ position: "absolute", textAlign: "center" }}>
        <h1 style={{ fontSize: "150px", color: "#ffffff", textShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF", marginBottom: "20px" }}>VIVITSU</h1>
        <button style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          fontSize: "20px",
          border: "2px solid #00FFFF",
          borderRadius: "10px",
          cursor: "pointer",
          transition: "0.3s",
          textShadow: "0 0 5px #00FFFF"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#00FFFF"}
        onMouseOut={(e) => e.target.style.backgroundColor = "black"}
        >
          Register Now!
        </button>
      </div>
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

