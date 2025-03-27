// import Laptop from "../components/LaptopDomains";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  // Sample data - replace with your actual team data
  const teamData = [
    {
      members: [
        { name: "Tripura", designation: "president",photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/johndoe" },
        { name: "Gayathri",designation: "vice-president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/janesmith" },
        { name: "Jhansi",designation: "general secretary", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/alexjohnson" },
      ]
    },
    {
      title: "Tech Team",
      members: [
        { name: "Avinash",designation: "tech lead", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/sarahconnor" },
        { name: "Soujanya",designation: "tech co-lead", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/davidmiller" },
        { name: "Eshwar",designation: "member", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/lisawong" },
        { name: "Nada",designation: "member", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/robertchen" },
        { name: "Naina",designation: "member", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/robertchen" },
        { name: "Subham",designation: "member", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/robertchen" },
        { name: "Swaran",designation: "member", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/robertchen" },
      ]
    },
    {
        title: "Event Management Team",
        members: [
          { name: "Sarah Connor",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/sarahconnor" },
          { name: "David Miller",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/davidmiller" },
          { name: "Lisa Wong",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/lisawong" },
          { name: "Robert Chen",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/robertchen" },
        ]
      },
      {
        title: "Documentation Team",
        members: [
          { name: "Sarah Connor",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/sarahconnor" },
          { name: "David Miller",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/davidmiller" },
          { name: "Lisa Wong",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/lisawong" },
          { name: "Robert Chen",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/robertchen" },
        ]
      },
      {
        title: "PR and logistics Team",
        members: [
          { name: "Sarah Connor",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/sarahconnor" },
          { name: "David Miller",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/davidmiller" },
          { name: "Lisa Wong",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/lisawong" },
          { name: "Robert Chen",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/robertchen" },
        ]
      },
      {
        title: "Publicity Team",
        members: [
          { name: "Sarah Connor",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/sarahconnor" },
          { name: "David Miller",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/davidmiller" },
          { name: "Lisa Wong",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/lisawong" },
          { name: "Robert Chen",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/robertchen" },
        ]
      },
      {
        title: "Database Team",
        members: [
          { name: "Sarah Connor",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/sarahconnor" },
          { name: "David Miller",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/davidmiller" },
          { name: "Lisa Wong",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/lisawong" },
          { name: "Robert Chen",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/robertchen" },
        ]
      },
      {
        title: "Design Team",
        members: [
          { name: "Sarah Connor",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/sarahconnor" },
          { name: "David Miller",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/davidmiller" },
          { name: "Lisa Wong",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/lisawong" },
          { name: "Robert Chen",designation: "president", photo: "fsw_logo.png", linkedin: "https://linkedin.com/in/robertchen" },
        ]
      },
    // Add other teams similarly (Event Management, PR and Logistics, Design)
  ];

  // Neon animation keyframes
  const flicker = {
    "0%": { textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff" },
    "19%": { textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff" },
    "20%": { textShadow: "none" },
    "21%": { textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff" },
    "23%": { textShadow: "none" },
    "25%": { textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff" },
    "54%": { textShadow: "none" },
    "56%": { textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff" },
    "100%": { textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff" }
  };

  return (
    <div style={{
      padding: "2rem",
      textAlign: "center",
      backgroundColor: "#121212",
      minHeight: "100vh"
    }}>      
       <div style={{ marginTop: "3rem" }}>
        <h1 style={{
          fontSize: "4rem",
          color: "#fff",
          textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff",
          marginBottom: "3rem",
          animation: "flicker 1.5s infinite alternate",
          "@keyframes flicker": flicker
        }}>CORE COMMITTEE</h1>
        
        {teamData.map((team, index) => (
          <div key={index} style={{ marginBottom: "3rem" }}>
            <h2 style={{
              fontSize: "2rem",
              color: "#fff",
              marginBottom: "1.5rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
              textShadow: "0 0 10px #0ff"
            }}>{team.title}</h2>
            
            <div style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2rem"
            }}>
              {team.members.map((member, i) => (
                <div key={i} style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "160px"
                }}>
                  <div style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid #0ff",
                    boxShadow: "0 0 15px #0ff",
                    marginBottom: "1rem",
                    transition: "transform 0.3s",
                    ":hover": {
                      transform: "scale(1.05)"
                    }
                  }}>
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }} 
                    />
                  </div>
                  
                  <h3 style={{
                    color: "#fff",
                    fontSize: "1.1rem",
                    marginBottom: "0.3rem",
                    fontWeight: "500"
                  }}>{member.name}</h3>
                  
                  <p style={{
                    color: "#aaa",
                    fontSize: "0.9rem",
                    marginBottom: "0.8rem",
                    fontStyle: "italic"
                  }}>{member.designation}</p>
                  
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: "#0ff",
                      fontSize: "1.5rem",
                      transition: "transform 0.3s, color 0.3s"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#0077b5";
                      e.currentTarget.style.transform = "scale(1.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#0ff";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <FaLinkedin />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;