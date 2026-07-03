import React, { useEffect, useState } from "react";
import "./HomePage.css";
import bg from "../../assets/background.png";

export default function HomePage({ onStart, onHistory }) {
  const fullText = "Face. Train. Succeed.";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        setTimeout(() => {
          i = 0;
          setDisplayText("");
        }, 2000);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container" style={{ backgroundImage: `url(${bg})` }}>
      {/* 🟣 Top-right user bar */}
      <div className="user-bar fade-in">
        <div className="user-circle glow"></div>
        <div className="user-name">NAME</div>
      </div>

      {/* 🟣 Left glass box */}
      <div className="glass stats-box slide-in-left">
        <h2>Stats</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/* 🟣 Right side boxes */}
      <div className="glass webcam-box float">
        <p>
          Web-cam
          <br />
          <span className="live-dot"></span> LIVE
        </p>
      </div>
      <div className="glass result-box fade-in">
        <p>Session Result</p>
      </div>

      {/* 🟣 Bottom boxes */}
      <div className="bottom-boxes">
        <div className="glass small-box hover-glow">AI Tips</div>
        <div className="glass small-box hover-glow">Feedback</div>

        {/* ✅ Rightmost box now contains the “View Past Sessions” button */}
        <div className="glass small-box hover-glow">
          <button className="secondary-btn small" onClick={onHistory}>
            📜 View Past Sessions
          </button>
        </div>
      </div>

      {/* 🟣 Center content */}
      <div className="center-content">
        <h1 className="typing-text pulse-text">{displayText}</h1>
        <button className="start-btn" onClick={onStart}>
          ▶ Start Training
        </button>
      </div>
    </div>
  );
}
