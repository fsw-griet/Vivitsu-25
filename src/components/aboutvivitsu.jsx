import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import NeonGradientCard from "./neongradientcard"; // Importing your existing NeonGradientCard component

const AboutPage = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.to(logoRef.current, {
      rotationY: "+=360",
      repeat: -1,
      duration: 5,
      ease: "linear",
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        textAlign: "center",
        fontFamily: "'Orbitron', sans-serif",
        color: "#fff",
        padding: "20px",
      }}
    >
      {/* Rotating Lightbulb Logo */}
      <div
        style={{
          width: "250px",
          height: "250px",
          transformStyle: "preserve-3d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          ref={logoRef}
          src="/vivilogo.png"
          alt="Rotating Lightbulb"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* About Description */}
      <div
        style={{
          maxWidth: "800px",
          background: "rgba(255, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
          Welcome to our platform! We believe in innovation and creativity.
          Our goal is to build immersive experiences with cutting-edge technology.
        </p>
      </div>

      {/* Info Section with Neon Gradient Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "30px",
          width: "80%",
        }}
      >
        {[
          { icon: "🌍", title: "Mode", text: "Fully Digital" },
          { icon: "📅", title: "Date", text: "11 - 20 April 2025" },
          { icon: "👥", title: "Registrations", text: "15,000+ Estimated" },
          { icon: "💰", title: "Prize Pool", text: "10,000 USD / 8,50,000 INR" },
        ].map((item, index) => (
          <NeonGradientCard key={index}>
            <span style={{ fontSize: "2rem" }}>{item.icon}</span>
            <h3 style={{ margin: "10px 0", fontSize: "1.2rem" }}>{item.title}</h3>
            <p style={{ fontSize: "1rem", opacity: 0.8 }}>{item.text}</p>
          </NeonGradientCard>
        ))}
      </div>

      {/* Closing Statement */}
      <div
        style={{
          marginTop: "30px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#a67cfa",
          textShadow: "0 0 10px #a67cfa, 0 0 20px #a67cfa",
        }}
      >
        We celebrate innovation, creativity, and the future of technology!
      </div>
    </div>
  );
};

export default AboutPage;
