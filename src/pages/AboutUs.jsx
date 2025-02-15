import React from 'react';
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
     
      {/* About Section */}
      <section id="aboutUs">
        <div id="vivitsu">
          <div className="heading">
            <img src="images/logo.png" alt="" className="vivitsu-logo" />
            <h1>VIVITSU</h1>
          </div>
          <div className="about">
            The Free Software Wing of GRIET College is proud to announce its upcoming 24-hour hackathon, to be held on the 28th and 29th of April. The hackathon is open to all students, regardless of their major or level of expertise. It is designed to provide a platform for students to showcase their coding skills, collaborate with their peers, and develop innovative solutions.
            <br />
            The hackathon will start at 10 am on the 28th of April and continue for 24 hours, until 10 am on the 29th of April. Participants can work on any project they choose from the 10 problem statements provided. They can work in teams of up to four people. Participants will receive extra points in the evaluation if the use of free softwares is included in their prototype.
            <br /><br />
            <h3>Benefits of VIVITSU:</h3>
            <ul className="benefits">
              <li>={">"} 24 hr knowledge and fun</li>
              <li>={">"} Recreational activities</li>
              <li>={">"} Goodies</li>
              <li>={">"} Tasty food😋</li>
              <li>={">"} Free beverages🥤</li>
              <li>={">"} Participation certificate</li>
              <li>={">"} 1,00,000 prize pool🤩</li>
              <li>={">"} Merit certificate for winners</li>
            </ul>
            <ul className="notice">
              <li>What not!!!</li>
              <li>An opportunity not to be missed!!</li>
              <li>
                <a role="link" aria-disabled="true">Register</a> ASAP!!!
              </li>
            </ul>
          </div>
        </div>

        <div id="fsw">
          <div className="heading">
            <img src="images/logo.png" alt="" className="fsw-logo" />
            <h1>FSW</h1>
          </div>
          <div className="about">
            Free Software Wing (FSW) is a lively technical student body of GRIET. FSW-GRIET is on a mission to create profound awareness about Free and Open Source Softwares in the careers of students and faculty of GRIET. Our student body conducts interactive events, insightful seminars, hands-on workshops and many more programs as part of the awareness campaign for Free and Open Source Softwares. We provide participants and attendees of our events with valuable knowledge that can be leveraged to advance their technological pursuits.
            <br /><br />
            <b>Some of the main objectives of FSW are:</b>
            <br />
            * To promote the use and benefits of FOSS among students and the community
            <br />
            * To encourage students to contribute to the FOSS community through coding and other activities
            <br />
            * To provide a platform for students to learn and collaborate on FOSS projects
            <br />
            * To foster a culture of innovation, collaboration, and creativity among students.
          </div>
        </div>
      </section>

      
    </>
  );
};

export default AboutUs;
