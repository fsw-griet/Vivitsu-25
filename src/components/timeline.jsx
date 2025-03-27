import React, { useState } from "react";

const Timeline = () => {
  const timelineEvents = [
    {
      title: "Inauguration",
      date: "Apr 9, 2025",
      description:
        "Submit a brief of your exploratory idea, including its purpose, functionality, and practical impact.",
    },
    {
      title: "Round 1",
      date: "Apr 9, 2025",
      description:
        "Last day to submit your project proposal! Only the most promising ideas will move forward.",
    },
    {
      title: "Round 2",
      date: "Apr 10, 2025",
      description:
        "Selected teams will be notified to proceed to the prototype development phase.",
    },
    {
      title: "Closing Ceremony",
      date: "Apr 10, 2025",
      description:
        "Develop a working prototype showcasing your idea’s key features and real-world impact.",
    },
  ];

  const [expanded, setExpanded] = useState(Array(timelineEvents.length).fill(false));

  const toggleReadMore = (index) => {
    const updatedExpanded = [...expanded];
    updatedExpanded[index] = !updatedExpanded[index];
    setExpanded(updatedExpanded);
  };

  return (
    <div
      style={{
        color: "white",
        padding: "20px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "blue" }}>Hackathon Timeline</h1>
      <p style={{ fontSize: "22px", marginBottom: "20px" }}>
        Track the journey from your idea to grand finale
      </p>
      <div
        style={{
          position: "relative",
          width: "90%",
          margin: "auto",
        }}
      >
        <div
          className="timeline-line"
          style={{
            position: "absolute",
            left: "50%",
            width: "4px",
            background: "#b880ff",
            height: "100%",
            transform: "translateX(-50%)",
          }}
        ></div>
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className="timeline-item"
            style={{
              position: "relative",
              margin: "30px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Mobile Date */}
            <div className="mobile-date">
              <p>{event.date}</p>
            </div>

            {index % 2 === 0 ? (
              <>
                <div className="desktop-spacer" style={{ width: "23%" }}></div>
                <div
                  className="date-box desktop-date"
                  style={{
                    background: "#222",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
                    width: "20%",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "18px", color: "#bbb" }}>{event.date}</p>
                </div>
                <div
                  className="event-card"
                  style={{
                    background: "#222",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
                    width: "47%",
                  }}
                >
                  <h3 style={{ fontSize: "18px", color: "#ffcc00" }}>{event.title}</h3>
                  <p style={{ fontSize: "16px" }}>
                    {expanded[index] || event.description.length <= 100
                      ? event.description
                      : `${event.description.slice(0, 100)}...`}
                    {event.description.length > 100 && (
                      <span
                        onClick={() => toggleReadMore(index)}
                        style={{
                          color: "#b880ff",
                          cursor: "pointer",
                          marginLeft: "5px",
                        }}
                      >
                        {expanded[index] ? "Read Less" : "Read More"}
                      </span>
                    )}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div
                  className="event-card"
                  style={{
                    background: "#222",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
                    width: "47%",
                  }}
                >
                  <h3 style={{ fontSize: "18px", color: "#ffcc00" }}>{event.title}</h3>
                  <p style={{ fontSize: "16px" }}>
                    {expanded[index] || event.description.length <= 100
                      ? event.description
                      : `${event.description.slice(0, 100)}...`}
                    {event.description.length > 100 && (
                      <span
                        onClick={() => toggleReadMore(index)}
                        style={{
                          color: "#b880ff",
                          cursor: "pointer",
                          marginLeft: "5px",
                        }}
                      >
                        {expanded[index] ? "Read Less" : "Read More"}
                      </span>
                    )}
                  </p>
                </div>
                <div
                  className="date-box desktop-date"
                  style={{
                    background: "#222",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
                    width: "20%",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "18px", color: "#bbb" }}>{event.date}</p>
                </div>
                <div className="desktop-spacer" style={{ width: "23%" }}></div>
              </>
            )}
            <div
              className="timeline-dot"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "12px",
                height: "12px",
                background: "#b880ff",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          </div>
        ))}

        <style jsx>{`
          @media (max-width: 768px) {
            .timeline-line {
              left: 20px !important;
              transform: none !important;
            }

            .timeline-item {
              flex-direction: column !important;
              margin: 40px 0 !important;
              align-items: flex-start !important;
            }

            .desktop-spacer,
            .desktop-date {
              display: none !important;
            }

            .mobile-date {
              display: block !important;
              position: absolute;
              left: -35px;
              top: -15px;
              background: #333;
              padding: 6px 12px;
              border-radius: 15px;
              font-size: 14px;
              color: #bbb;
              z-index: 2;
            }

            .event-card {
              width: 100% !important;
              margin: 10px 0 !important;
              text-align: left !important;
              position: relative;
              left: 30px;
            }

            .timeline-dot {
              left: 16px !important;
              top: 25px !important;
              width: 14px;
              height: 14px;
            }

            .read-more {
              font-size: 14px;
            }
          }

          @media (min-width: 769px) {
            .mobile-date {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Timeline;