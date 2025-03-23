import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

const NeonGradientCard = ({
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = { firstColor: "#ff00aa", secondColor: "#00FFF1" },
}) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const cardStyles = {
    position: "relative",
    width: "100%",
    height: "auto",
    borderRadius: `${borderRadius}px`,
    padding: "20px",
    backgroundColor: "#111",
    color: "white",
    textAlign: "center",
    fontFamily: "'Orbitron', sans-serif",
    overflow: "hidden",
  };

  const borderStyles = {
    content: "''",
    position: "absolute",
    top: `-${borderSize}px`,
    left: `-${borderSize}px`,
    width: `${dimensions.width + borderSize * 2}px`,
    height: `${dimensions.height + borderSize * 2}px`,
    borderRadius: `${borderRadius}px`,
    background: `linear-gradient(0deg, ${neonColors.firstColor}, ${neonColors.secondColor})`,
    backgroundSize: "100% 200%",
    animation: "neonGlow 3s infinite alternate",
  };

  const blurStyles = {
    ...borderStyles,
    filter: "blur(50px)",
    opacity: 0.8,
  };

  return (
    <div ref={containerRef} style={{ position: "relative", display: "inline-block" }}>
      {/* Neon Border */}
      <div style={borderStyles}></div>
      <div style={blurStyles}></div>

      {/* Card Content */}
      <div style={cardStyles}>{children}</div>

      {/* Keyframes Animation */}
      <style>
        {`
          @keyframes neonGlow {
            0% { background-position: top center; }
            100% { background-position: bottom center; }
          }
        `}
      </style>
    </div>
  );
};

NeonGradientCard.propTypes = {
    particleCount: PropTypes.number,
    rangeY: PropTypes.number,
    borderSize: PropTypes.number,
    borderRadius: PropTypes.number,
    baseRadius: PropTypes.number,
    neonColors: PropTypes.number,
    baseHue: PropTypes.number,
    backgroundColor: PropTypes.string,
    containerClassName: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  export default NeonGradientCard;  