import React from "react";
import "../Stylesheets/Home.css";
import { useLocation, useNavigate } from "react-router-dom";

function Homepage() {
  const location = useLocation();
  const navigate = useNavigate();

  if (
    location.pathname === "/pr" ||
    location.pathname === "/resume" ||
    location.pathname === "/contact"
  ) {
    return null;
  }

  const handleNavigate = () => {
    navigate("/pr");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <section className="home">
      <div className="container">
        <div className="hero">

          <div className="hero-image">
            <img
            
              src="/ChatGPT Image Apr 1, 2026, 09_20_08 AM.png"
              alt="Muhammad Saad Mustafa"
            />
          </div>

          <div className="hero-content">
            <h1>
              Hi, I'm <span>Muhammad Saad Mustafa</span>
            </h1>

            <h2>MERN Stack Developer (Full Stack)</h2>

            <p>
              Passionate Full Stack Developer specializing in MongoDB,
              Express.js, React.js, and Node.js. Currently seeking an
              entry-level opportunity to build scalable web applications
              and grow as a professional software developer.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn" onClick={handleContact}>
                Hire Me
              </button>

              <button className="secondary-btn" onClick={handleNavigate}>
                View Projects
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;