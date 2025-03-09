import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";

function LaptopDo() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const mountRef = useRef(null);
  const worldRef = useRef(null);
  const glassPiecesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clampedProgress = Math.min(scrollProgress, 70);
  const laptopAngle = Math.max(0, 200 * (1 - clampedProgress / 70)); // Adjusted angle for full opening

  // Three.js Scene
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Physics World
    const world = new CANNON.World();
    world.gravity.set(0, -9.8, 0);
    worldRef.current = world;

    // Glass Material
    const glassMaterial = new THREE.MeshStandardMaterial({
      color: 0x99ccff,
      transparent: true,
      opacity: 0.6,
      roughness: 0.1,
      metalness: 0.9,
    });

    // Create Glass Pieces
    function createGlass() {
      const pieces = [];
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 5; j++) {
          const geometry = new THREE.PlaneGeometry(0.5, 0.5);
          const mesh = new THREE.Mesh(geometry, glassMaterial);
          mesh.position.set(i * 0.55 - 2.5, j * 0.55 - 1, 0);
          scene.add(mesh);

          // Physics body
          const shape = new CANNON.Box(new CANNON.Vec3(0.25, 0.25, 0.01));
          const body = new CANNON.Body({ mass: 1 });
          body.addShape(shape);
          body.position.set(mesh.position.x, mesh.position.y, 0);
          world.addBody(body);

          pieces.push({ mesh, body });
        }
      }
      glassPiecesRef.current = pieces;
    }
    createGlass();

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      world.step(1 / 60);
      glassPiecesRef.current.forEach(({ mesh, body }) => {
        mesh.position.copy(body.position);
        mesh.quaternion.copy(body.quaternion);
      });
      renderer.render(scene, camera);
    }
    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  // Scroll-based Shatter Effect
  useEffect(() => {
    if (scrollProgress >= 70) {
      glassPiecesRef.current.forEach(({ body }) => {
        body.applyImpulse(
          new CANNON.Vec3((Math.random() - 0.5) * 10, 5, 0),
          body.position
        );
      });
    }
  }, [scrollProgress]);

  return (
    <div className="min-h-[300vh]">
      <div className="min-h-screen sticky top-0 flex items-center justify-center overflow-hidden">
        {/* Three.js Canvas for Glass Effect */}
        <div
          ref={mountRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        ></div>

        {/* Laptop Container */}
        <div
          className="relative w-[1000px] h-[600px] transform-gpu"
          style={{ perspective: "1500px" }}
        >
          {/* Laptop Screen */}
          <div
            className="absolute w-full h-[600px] bg-gray-800 rounded-t-xl border-4 border-gray-700 transform-gpu origin-bottom"
            style={{
              transform: `rotateX(${-laptopAngle}deg)`,
              transition: "transform 0.1s ease-out",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Screen Content */}
            <div className="absolute inset-2 bg-black rounded overflow-hidden">
              <div className="animate-fade-up">
                <div className="bg-gradient-to-b from-black to-gray-900 py-20 text-white w-full overflow-hidden">
                  <div className="container mx-auto flex flex-col md:flex-row items-center max-w-6xl px-6">
                    <div className="md:w-1/2 text-left">
                      <h2 className="text-4xl font-bold">OUR TEAM</h2>
                      <div className="w-16 h-1 bg-blue-500 mt-2"></div>
                      <p className="text-gray-300 mt-4 text-lg">
                        Meet the passionate individuals driving innovation and
                        excellence.
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
              </div>
            </div>
          </div>

          {/* Laptop Base */}
          <div className="absolute bottom-0 w-full h-[20px] bg-gray-700 rounded-b-xl transform-gpu" />
        </div>

        {/* Scroll Indicator */}
        {scrollProgress < 70 && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
            <p className="text-center mb-2">Scroll to open</p>
            <div className="w-6 h-10 border-2 border-white rounded-full mx-auto">
              <div className="w-1 h-2 bg-white rounded-full mx-auto mt-2 animate-scroll" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LaptopDo;
