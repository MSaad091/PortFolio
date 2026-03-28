// import React from "react";
// import "../Stylesheets/About.css";
// function About() {
//   return (
//     <>
//       <div className="about">
//         <h3>About</h3>
//         <h2>Get To Know me</h2>
//         <div className="about-me">
//           <h4>
//             “Hi! I’m Saad, a passionate MERN stack developer with hands-on
//             experience in JavaScript, React, Node.js, Express, and MongoDB. I
//             love building interactive web applications and learning new
//             technologies. As a fresher, I have completed multiple projects
//             ranging from small JavaScript apps to full-stack MERN applications
//             like blogs, authentication systems, and e-commerce platforms. My
//             goal is to contribute to innovative web projects while continuously
//             improving my skills.”
//           </h4>
//         </div>
//         <div className="focus">
//           <h5>UI Engineering</h5>
//           <h4>
//             Focused on creating modern, responsive, and user-friendly interfaces
//             using React. Comfortable with component-based architecture and state
//             management (Redux Toolkit).
//           </h4>
//         </div>
//         <div className="focus">
//           <h5>Technical Expertise</h5>
//           <h4>
//             Building full-stack web applications using MERN stack (MongoDB,
//             Express.js, React.js, Node.js). Experienced in authentication
//             systems, REST APIs, and responsive UI development.
//           </h4>
//         </div>
//         <div className="focus">
//           <h5>Continuous Learning</h5>
//           <h4>Actively learning advanced backend concepts, scalability, and best coding practices to grow as a professional full-stack developer.</h4>
//         </div>
//       </div>
//     </>
//   );
// }

// export default About;

import React from "react";
import "../Stylesheets/About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="about-subtitle">About</span>
          <h2 className="about-title">Get To Know Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-bio">
              <p>
                "Hi! I'm <span className="highlight">Saad</span>, a passionate MERN stack developer 
                with hands-on experience in JavaScript, React, Node.js, Express, and MongoDB. 
                I love building interactive web applications and learning new technologies."
              </p>
              <p>
                As a fresher, I have completed multiple projects ranging from small JavaScript 
                apps to full-stack MERN applications like blogs, authentication systems, and 
                e-commerce platforms. My goal is to contribute to innovative web projects while 
                continuously improving my skills.
              </p>
            </div>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="card-icon">🎨</div>
              <h3>UI Engineering</h3>
              <p>
                Focused on creating modern, responsive, and user-friendly interfaces using React. 
                Comfortable with component-based architecture and state management (Redux Toolkit).
              </p>
            </div>

            <div className="expertise-card">
              <div className="card-icon">⚙️</div>
              <h3>Technical Expertise</h3>
              <p>
                Building full-stack web applications using MERN stack (MongoDB, Express.js, 
                React.js, Node.js). Experienced in authentication systems, REST APIs, and 
                responsive UI development.
              </p>
            </div>

            <div className="expertise-card">
              <div className="card-icon">📚</div>
              <h3>Continuous Learning</h3>
              <p>
                Actively learning advanced backend concepts, scalability, and best coding practices 
                to grow as a professional full-stack developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;