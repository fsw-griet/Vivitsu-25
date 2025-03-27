import { useEffect } from "react";

const Web = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 75,
            density: { enable: true, value_area: 500 },
          },
          color: { value: "#0066ff" }, // Neon dark blue particles
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
          },
          opacity: { value: 0.9 }, // Increase opacity for better glow
          size: { value: 5, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#0066ff", // Neon dark blue lines
            opacity: 1, // More visible lines
            width: 2, // Slightly thicker lines for glow
          },
          move: { enable: true, speed: 6, out_mode: "out" },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
        },
        retina_detect: true,
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="particles-js" style={styles.particleContainer}></div>;
};

const styles = {
  particleContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    backgroundColor: "transparent", // Dark background for contrast
    filter: "drop-shadow(0px 0px 8px #0066ff)", // Neon glow effect
  },
};

export default Web;
