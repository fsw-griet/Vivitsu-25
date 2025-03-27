

const Timeline = () => {
  const timelineEvents = [
    { title: "Inauguration", date: "Apr 9, 2025", description: "Submit a brief of your exploratory idea, including its purpose, functionality, and practical impact." },
    { title: "Round 1", date: "Apr 9, 2025", description: "Last day to submit your project proposal! Only the most promising ideas will move forward." },
    { title: "Round 2", date: "Apr 10, 2025", description: "Selected teams will be notified to proceed to the prototype development phase."},
    { title: "Closing Ceremony", date: "Apr 10, 2025", description: "Develop a working prototype showcasing your idea’s key features and real-world impact." },

  ];

  return (
    <div style={{ color: "white", padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
      <h1 style={{ color: "blue" }}>Hackathon Timeline</h1>
      <p style={{ fontSize: "22px", marginBottom: "20px" }}>Track the journey from your idea to grand finale</p>
      <div style={{ position: "relative", width: "50%", margin: "auto" }}>
        <div style={{ position: "absolute", left: "50%", width: "4px", background: "#b880ff", height: "100%", transform: "translateX(-50%)" }}></div>
        {timelineEvents.map((event, index) => (
          <div key={index} style={{ position: "relative", margin: "30px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {index % 2 === 0 ? (
              <>
                <div style={{ width: "23%" }}></div>
                <div style={{ background: "#222", padding: "10px", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)", width: "20%", textAlign: "center" }}>
                  <p style={{ fontSize: "18px", color: "#bbb" }}>{event.date}</p>
                </div>
                <div style={{ background: "#222", padding: "10px", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)", width: "47%" }}>
                  <h3 style={{ fontSize: "18px", color: "#ffcc00" }}>{event.title}</h3>
                  <p style={{ fontSize: "16px" }}>{event.description}</p>
                  
                </div>
              </>
            ) : (
              <>
                <div style={{ background: "#222", padding: "10px", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)", width: "47%" }}>
                  <h3 style={{ fontSize: "18px", color: "#ffcc00" }}>{event.title}</h3>
                  <p style={{ fontSize: "16px" }}>{event.description}</p>
                  
                </div>
                <div style={{ background: "#222", padding: "10px", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)", width: "20%", textAlign: "center" }}>
                  <p style={{ fontSize: "18px", color: "#bbb" }}>{event.date}</p>
                </div>
                <div style={{ width: "23%" }}></div>
              </>
            )}
            <div style={{ position: "absolute", top: "50%", left: "50%", width: "12px", height: "12px", background: "#b880ff", borderRadius: "50%", transform: "translate(-50%, -50%)" }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
