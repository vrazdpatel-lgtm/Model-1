import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h2 className="footer-logo">MyWebsite</h2>

        <p className="footer-text">
          Full Stack MERN Application built with React, Node.js, Express and MongoDB.
        </p>

        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/users">Users</a></li>
          <li><a href="/api">API Calling</a></li>
        </ul>

        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href="mailto:example@gmail.com">
            Email
          </a>
        </div>

        <div className="footer-bottom">
          © 2026 MyWebsite | All Rights Reserved
        </div>

      </div>
    </footer>
  );
}

export default Footer;