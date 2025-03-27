import React from 'react';

function Highlights() {
  const circleStyle = {
    height: '150px', // Default size for medium screens
    width: '150px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const textStyle = {
    textAlign: 'center',
    fontSize: '16px', // Default size for medium screens
    fontWeight: 'bold',
    marginTop: '10px',
    color: 'white',
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Allows wrapping for smaller screens
    justifyContent: 'center',
    gap: '40px', // Default gap for medium screens
    marginTop: '25px',
  };

  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold mb-1 flex flex-col items-center text-center my-5 font-playfair-display text-white">
        EVENT HIGHLIGHTS
      </h1>
      <div style={containerStyle}>
        <div>
          <div style={circleStyle}>
            <img src="video1.gif" alt="gif1" style={imageStyle} />
          </div>
          <div style={textStyle}>24 Hours Hackathon</div>
        </div>
        <div>
          <div style={circleStyle}>
            <img src="img7.png" alt="gif5" style={imageStyle} />
          </div>
          <div style={textStyle}>Food and Wifi</div>
        </div>
        <div>
          <div style={circleStyle}>
            <img src="video2.gif" alt="gif3" style={imageStyle} />
          </div>
          <div style={textStyle}>Open Source Software</div>
        </div>
        <div>
          <div style={circleStyle}>
            <img src="video4.gif" alt="gif3" style={imageStyle} />
          </div>
          <div style={textStyle}>Increase Your Network</div>
        </div>
        <div>
          <div style={circleStyle}>
            <img src="video6.gif" alt="gif5" style={imageStyle} />
          </div>
          <div style={textStyle}>Fun Activities</div>
        </div>
        <div>
          <div style={circleStyle}>
            <img src="video5.gif" alt="gif5" style={imageStyle} />
          </div>
          <div style={textStyle}>Culturals</div>
        </div>
        <div>
          <div style={circleStyle}>
            <img src="video3.gif" alt="gif3" style={imageStyle} />
          </div>
          <div style={textStyle}>Hangout With Friends</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 24px; /* Smaller font size for mobile */
          }
          div[style*="height: 150px"] {
            height: 120px; /* Smaller circle size for mobile */
            width: 120px;
          }
          div[style*="font-size: 16px"] {
            font-size: 14px; /* Smaller text size for mobile */
          }
          div[style*="gap: 40px"] {
            gap: 20px; /* Reduced gap for mobile */
          }
        }

        @media (min-width: 1024px) {
          h1 {
            font-size: 48px; /* Larger font size for bigger screens */
          }
          div[style*="height: 150px"] {
            height: 200px; /* Larger circle size for bigger screens */
            width: 200px;
          }
          div[style*="font-size: 16px"] {
            font-size: 18px; /* Larger text size for bigger screens */
          }
          div[style*="gap: 40px"] {
            gap: 60px; /* Increased gap for bigger screens */
          }
        }
      `}</style>
    </div>
  );
}

export default Highlights;