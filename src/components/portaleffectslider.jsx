import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const PortalEffectSlider = () => {
  const ringRef = useRef(null);
  const imgRefs = useRef([]);

  useEffect(() => {
    let xPos = 0;

    gsap.timeline()
      .set(ringRef.current, { rotationY: 180, cursor: "grab" })
      .set(imgRefs.current, {
        rotateY: (i) => i * -36,
        transformOrigin: "50% 50% 500px",
        z: -500,
        backgroundImage: (i) => `url(https://picsum.photos/id/${i + 32}/600/400/)`,
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: "hidden",
      })
      .from(imgRefs.current, {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: "expo",
      });

    const getBgPos = (i) => {
      return (
        100 -
        ((gsap.utils.wrap(0, 360, gsap.getProperty(ringRef.current, "rotationY") - 180 - i * 36) / 360) *
          500) +
        "px 0px"
      );
    };

    const drag = (e) => {
      if (e.touches) e.clientX = e.touches[0].clientX;

      gsap.to(ringRef.current, {
        rotationY: `-=${(Math.round(e.clientX) - xPos) % 360}`,
        onUpdate: () => {
          gsap.set(imgRefs.current, { backgroundPosition: (i) => getBgPos(i) });
        },
      });
      xPos = Math.round(e.clientX);
    };

    const dragStart = (e) => {
      if (e.touches) e.clientX = e.touches[0].clientX;
      xPos = Math.round(e.clientX);
      gsap.set(ringRef.current, { cursor: "grabbing" });
      window.addEventListener("mousemove", drag);
      window.addEventListener("touchmove", drag);
    };

    const dragEnd = () => {
      window.removeEventListener("mousemove", drag);
      window.removeEventListener("touchmove", drag);
      gsap.set(ringRef.current, { cursor: "grab" });
    };

    window.addEventListener("mousedown", dragStart);
    window.addEventListener("touchstart", dragStart);
    window.addEventListener("mouseup", dragEnd);
    window.addEventListener("touchend", dragEnd);

    return () => {
      window.removeEventListener("mousedown", dragStart);
      window.removeEventListener("touchstart", dragStart);
      window.removeEventListener("mouseup", dragEnd);
      window.removeEventListener("touchend", dragEnd);
    };
  }, []);

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      background: "#000",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div style={{
        perspective: "2000px",
        width: "300px",
        height: "400px",
        position: "relative",
      }}>
        <div ref={ringRef} style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          position: "relative",
        }}>
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (imgRefs.current[i] = el)}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundSize: "cover",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortalEffectSlider;
