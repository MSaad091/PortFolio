// import React from "react";
// import '../Stylesheets/Resume.css';

// function Resume() {
//   return (
//     <div className="resume-container">
//       <h2>My Resume</h2>

//       {/* 👀 View Resume */}
//       <a
//         href="/Saad_MERN_Developer_Resume.pdf"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="resume-btn"
//       >
//         View Resume
//       </a>

//       {/* ⬇ Download Resume */}
//       <a
//         href="/Saad_MERN_Developer_Resume.pdf"
//         download
//         className="resume-btn"
//       >
//         Download Resume
//       </a>
//     </div>
//   );
// }

// export default Resume;
import React from "react";
import "../Stylesheets/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      
      <h2>My Resume</h2>

      {/* 📄 Resume Preview */}
      <iframe
        src="/M_Saad_ATS_Resume.pdf"
        title="Resume"
        className="resume-frame"
      ></iframe>

      {/* Buttons */}
      <div className="resume-buttons">
        
        {/* 👀 View Resume */}
        <a
          href="/M_Saad_ATS_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn view-btn"
        >
          View Resume
        </a>

        {/* ⬇ Download Resume */}
        <a
          href="/M_Saad_ATS_Resume.pdf"
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