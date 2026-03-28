import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../Stylesheets/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("❌ Please fill all fields");
      return;
    }

    emailjs
      .send(
        "service_quudm0b",        
        "template_0lf2x0r",       
        formData,
        "9XqUHIIgPbzSIERuT"      
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Try again.");
      });
  };

  return (
    <div className="contact-container">

      <h2>Contact Me</h2>
      <p className="contact-subtext">
        Feel free to reach out for collaborations or job opportunities 🚀
      </p>

      {/* Contact Info */}
      <div className="contact-info">
        <p>📧 msaadmustafa091@gmail.com</p>
        <p>📍 Pakistan</p>
        <p>💼 Open to Work</p>
      </div>

      {/* Social Links */}
      <div className="contact-socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {status && <p className="form-status">{status}</p>}
    </div>
  );
}

export default Contact;