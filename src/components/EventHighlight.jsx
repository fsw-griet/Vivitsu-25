import { useEffect, useRef } from "react";
import Web from "./Web";

const events = [
  { date: "28-03-2024", title: "Foss-Fest", description: "We taught about free open source software to people and we made everyone familiar with github and git commands", image: "1.jpg" },
  { date: "19,20-04-2024", title: "Vivitsu 2.0 - Hackathon", description: "Prior to the hackathon, 10 problem statements were uploaded to our website, and participants were requested to select one of them. Students were informed of the code of conduct at 10:00 a.m.The first round of the Hackathon's evaluation took place at 11:00 a.m. on April 28. We served lunch and dinner, and to keep the participants from getting bored throughout the night, we organised enjoyable games and 14 activities", image: "1.jpg" },
  { date: "05-12-2023 ", title: "Cyber-Bloom", description: "Celebrating Irish culture with parades and festivities.", image: "cb.png" },
  { date: "28,29-03-2023", title: "VIVITSU 1.0- Hackathon ", description: "Celebrating Irish culture with parades and festivities.", image: "vi1.0.png" },
  { date: "17-11-2022 ", title: "Tech Bola 2.0", description: "Celebrating Irish culture with parades and festivities.", image: "tb2.0.png" },
  { date: "19-08-2022 ", title: "Photo Fiesta", description: "At the beginning of the event, the participants were asked to install the GIMP software for the purpose of the event. After that, the participants were given a walk-through of the software by the FSW team.\nParticipants were given short, effective hands-on tutorials on the applications of the GIMP software such as background removal, watermark removal, GIF creation. The FSW team members ensured 2 that the participants followed along with the tutorials and cleared doubts and assisted the participants simultaneously.\n Followed by the tutorials, the participants were directed to take a lunch break of 60 minutes and assemble at the venue post lunch for a challenge. The participants were asked to implement the applications on their choice of images using the GIMP software and submit the same. The three best submissions were awarded with exciting prizes.", image: "pf.png" },
  { date: "23/05/2021 ", title: "Pyhub Workshop", description: "At the beginning of the event, the participants were asked to install the GIMP software for the purpose of the event. After that, the participants were given a walk-through of the software by the FSW team.\nParticipants were given short, effective hands-on tutorials on the applications of the GIMP software such as background removal, watermark removal, GIF creation. The FSW team members ensured 2 that the participants followed along with the tutorials and cleared doubts and assisted the participants simultaneously.\n Followed by the tutorials, the participants were directed to take a lunch break of 60 minutes and assemble at the venue post lunch for a challenge. The participants were asked to implement the applications on their choice of images using the GIMP software and submit the same. The three best submissions were awarded with exciting prizes.", image: "pf.png" },
  { date: "27/03/2021 ", title: "INTRODUCTION TO FREE SOFTWARE", description: "At the beginning of the event, the participants were asked to install the GIMP software for the purpose of the event. After that, the participants were given a walk-through of the software by the FSW team.\nParticipants were given short, effective hands-on tutorials on the applications of the GIMP software such as background removal, watermark removal, GIF creation. The FSW team members ensured 2 that the participants followed along with the tutorials and cleared doubts and assisted the participants simultaneously.\n Followed by the tutorials, the participants were directed to take a lunch break of 60 minutes and assemble at the venue post lunch for a challenge. The participants were asked to implement the applications on their choice of images using the GIMP software and submit the same. The three best submissions were awarded with exciting prizes.", image: "/pf.png" },

  { date: "21-08-2020", title: "“QUIZ”EMA-TALKIES", description: "s and festivities.", image: "1.jpg" },
  { date: "28-03-2020", title: "Picturize the Fact", description: "s and festivities.", image: "1.jpg" },

];

const Timeline = () => {
  const eventRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { rootMargin: "0px 0px -100px 0px", threshold: 0.2 }
    );

    eventRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => eventRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  return (
    <div style={{ 
      position: "relative", 
      width: "80%", 
      margin: "auto", 
      padding: "50px 0", 
      minHeight: "300vh",
      background: "transparent"
    }}>
      {/* Blue timeline line */}
      <div style={{
        position: "absolute",
        left: "50%",
        width: "4px",
        height: "100%",
        background: "#00f7ff", // Changed to blue
        transform: "translateX(-50%)",
        zIndex: 1
      }}></div>
      
      {events.map((event, index) => {
        const isEven = index % 2 === 0;
        const flexDirection = isEven ? "row" : "row-reverse";
        
        return (
          <div
            key={index}
            ref={(el) => (eventRefs.current[index] = el)}
            style={{
              position: "relative",
              width: "100%",
              margin: "80px 0",
              padding: "20px 0",
              opacity: 0,
              transform: "translateY(100px)",
              transition: "opacity 1s ease-out, transform 1s ease-out",
              background: "transparent"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection,
                alignItems: "center",
                width: "100%",
                gap: "40px"
              }}
            >
              {/* Image container */}
              <div style={{ 
                flex: 1,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  style={{ 
                    width: "100%", 
                    height: "100%",
                    maxHeight: "200px",
                    objectFit: "cover",
                    borderRadius: "4px"
                  }} 
                />
              </div>
              
              {/* Content container */}
              <div style={{ 
                flex: 1,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "white"
              }}>
                <h3 style={{ margin: "10px 0", color: "#00f7ff" }}>{event.date}</h3> {/* Changed to blue */}
                <h2 style={{ margin: "5px 0" }}>{event.title}</h2>
                <p style={{ margin: "5px 0", fontSize: "14px" }}>{event.description}</p>
              </div>
            </div>
            
            {/* Timeline dot - now blue */}
            <div style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "20px",
              height: "20px",
              background: "#00f7ff", // Changed to blue
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              boxShadow: "0 0 10px #00f7ff" // Changed to blue
            }}></div>
          </div>
        );
      })}
    </div>
  );
};

const EventHighlight = () => {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      textAlign: "center", 
      margin: "40px 0",
      background: "transparent",
      color: "white"
    }}>
      <div>
        <Web />
        <h1 style={{ 
          color: "white", 
          textAlign: "center",
          fontSize: "3rem",
          margin: "2rem 0",
          textShadow: "0 0 10px #00f7ff" // Changed to blue
        }}>OUR EVENTS</h1>
      </div>
      <Timeline />
    </div>
  );
};

export default EventHighlight;
