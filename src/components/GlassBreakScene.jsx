import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import PropTypes from "prop-types";

const GlassBreakScene = ({ transparent = true, roughness = 0.05, transmission = 1, intensity = 1 }) => {
  const meshRef = useRef();
  const [breakStrength, setBreakStrength] = useState(0);

  // Handle scroll to increase glass break effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const breakFactor = Math.min(scrollY / 500, 1); // Limit effect
      setBreakStrength(breakFactor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rotate glass slowly
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Default geometry */}
      <MeshTransmissionMaterial
        transparent={transparent}
        roughness={roughness + breakStrength * 0.3} // Increase roughness on scroll
        transmission={transmission - breakStrength * 0.5} // Reduce clarity on scroll
        intensity={intensity}
      />
    </mesh>
  );
};

// ✅ Define PropTypes correctly
GlassBreakScene.propTypes = {
  transparent: PropTypes.bool,
  roughness: PropTypes.number,
  transmission: PropTypes.number,
  intensity: PropTypes.number,
};

export default GlassBreakScene;
