

const Timeline = () => {
  const timelineEvents = [
    { title: "Round 1: Idea Submission Begins", date: "Apr 9, 2025", time:"4PM IST", description: "Submit a brief of your exploratory idea, including its purpose, functionality, and practical impact.", status: "Completed" },
    { title: "Round 1 Submission Deadline", date: "Apr 9, 2025", description: "Last day to submit your project proposal! Only the most promising ideas will move forward.", status: "Completed" },
    { title: "Round 2 Results Announced", date: "Apr 10, 2025", description: "Selected teams will be notified to proceed to the prototype development phase.", status: "Completed" },
    { title: "Round 2: Prototype Development Begins", date: "Apr 10, 2025", description: "Develop a working prototype showcasing your idea’s key features and real-world impact.", status: "Completed" },

  ];

  return (
    <div style={{ color: "white", padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
      <h2 style={{ color: "#b880ff" }}>Hackathon Timeline</h2>
      <p style={{ fontSize: "14px", marginBottom: "20px" }}>Track the journey from idea submission to grand finale</p>
      <div style={{ position: "relative", width: "50%", margin: "auto" }}>
        <div style={{ position: "absolute", left: "50%", width: "4px", background: "#b880ff", height: "100%", transform: "translateX(-50%)" }}></div>
        {timelineEvents.map((event, index) => (
          <div key={index} style={{ position: "relative", margin: "30px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {index % 2 === 0 ? (
              <>
                <div style={{ width: "20%" }}></div>
                <div style={{ background: "#222", padding: "10px", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)", width: "20%", textAlign: "center" }}>
                  <p style={{ fontSize: "12px", color: "#bbb" }}>{event.date}</p>
                </div>
                <div style={{ background: "#222", padding: "10px", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)", width: "45%" }}>
                  <h3 style={{ fontSize: "16px", color: "#ffcc00" }}>{event.title}</h3>
                  <p style={{ fontSize: "14px" }}>{event.description}</p>
                  <p style={{ fontSize: "12px", fontWeight: "bold", color: "#4caf50" }}>{event.status}</p>
                </div>
              </>
            ) : (
              <>
                <div style={{ background: "#222", padding: "10px", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)", width: "45%" }}>
                  <h3 style={{ fontSize: "16px", color: "#ffcc00" }}>{event.title}</h3>
                  <p style={{ fontSize: "14px" }}>{event.description}</p>
                  <p style={{ fontSize: "12px", fontWeight: "bold", color: "#4caf50" }}>{event.status}</p>
                </div>
                <div style={{ background: "#222", padding: "10px", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)", width: "20%", textAlign: "center" }}>
                  <p style={{ fontSize: "12px", color: "#bbb" }}>{event.date}</p>
                </div>
                <div style={{ width: "20%" }}></div>
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
