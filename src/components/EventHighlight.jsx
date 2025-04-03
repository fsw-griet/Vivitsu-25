import { useEffect, useRef } from "react";
import Web from "./Web";

const events = [
  { date: "28-03-2024", title: "Foss-Fest", description: "FOSSFEST is an event organized by the Free Software Wing (FSW) to promote the use and awareness of free and open-source software. It brings together students, tech enthusiasts, and industry experts through expert talks, interactive competitions, and engaging activities. The event fosters a strong open-source community and encourages participants to embrace free software solutions.", image: "1.jpg" },
  { date: "19,20-04-2024 ", title: "Vivitsu 24", description: "Vivitsu'24, the flagship event of the Free Software Wing (FSW), was a grand celebration of open-source innovation across diverse domains like healthcare, travel & tourism, open innovation, smart automation, and agrotech. With expert speakers and engaging competitions, the event provided a platform for students to explore and implement free software solutions. Backed by strong faculty support, Vivitsu'24 witnessed enthusiastic participation, fostering a vibrant tech community. The event’s success reinforced FSW’s commitment to promoting open-source culture on campus.", image: "cb.png" },
  { date: "05-12-2023 ", title: "Cyber-Bloom", description: "At the onset of the Cyber Bloom event, attendees were required to install essential Software tools are VMware, kali,metasploitable designated for the occasion. Subsequently, the Cyber Bloom organizing team delivered comprehensive tutorials, guiding participants through practical applications, including threat detection, encryption, and secure data handling. ", image: "cb.png" },
  { date: "28,29-03-2023", title: "VIVITSU 1.0 ", description: "The hackathon began with participants selecting from 10 predefined problem statements posted online. After a code of conduct briefing at 10:00 AM on April 28, the first evaluation round commenced at 11:00 AM. To maintain energy and engagement, meals (lunch, dinner, and breakfast) were provided, along with fun nighttime activities. The final jury evaluation occurred at 11:30 AM on April 29, followed by result announcements post-lunch. Winning teams received ₹10,000 per problem statement, culminating in a total prize pool of ₹1 lakh. The event concluded with a vote of thanks by the FSW coordinator.", image: "vi1.0.png" },
  { date: "17-11-2022 ", title: "Tech Bola 2.0", description: "The event featured an interactive ticket-based game where participants marked answers on their cards as questions were read. Prizes were awarded for being first to mark 5 correct answers, completing any row, or finishing the entire ticket. The HoD of IT and FSW Faculty Coordinator presented gifts to winners, with refreshments served during the event.", image: "tb2.0.png" },
  { date: "19-08-2022 ", title: "Photo Fiesta", description: "The event began with participants installing GIMP, a free and open-source image editing software, to prepare for the workshop. The FSW team then conducted an interactive walkthrough of the software, demonstrating key features through hands-on tutorials that covered practical applications like background removal, watermark removal, and GIF creation. Throughout the session, team members provided individual assistance, ensuring participants could follow along while promptly addressing any questions or difficulties. The event concluded with the recognition of the top three submissions, which were awarded prizes based on creativity and technical execution.", image: "pf.png" },
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
