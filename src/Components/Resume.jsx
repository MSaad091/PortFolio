import React from "react";
import "../Stylesheets/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      
      <h2>My Resume</h2>

      {/* 📄 Resume Preview */}
      <iframe
        src="/SaadMustafa.pdf"
        title="Resume"
        className="resume-frame"
      ></iframe>

      {/* Buttons */}
      <div className="resume-buttons">
        
        {/* 👀 View Resume */}
        <a
          href="/SaadMustafa.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn view-btn"
        >
          View Resume
        </a>

        {/* ⬇ Download Resume */}
        <a
        
          href="/SaadMustafa.pdf"
          download
          className="resume-btn download-btn"
        >
          Download Resume
        </a>

      </div>
    </div>
  );
}

export default Resume;