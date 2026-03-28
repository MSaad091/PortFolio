import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../Stylesheets/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="footer-name">Muhammad Saad Mustafa</h2>
        <p className="footer-tagline">
          MERN Stack Developer | Building Modern Web Applications
        </p>

        <div className="footer-socials">
          <a href="https://github.com/MSaad091" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/m-saad-mustafa-96a061277/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:saad.mustafa@email.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Muhammad Saad Mustafa. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;