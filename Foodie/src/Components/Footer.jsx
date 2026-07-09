import React from "react";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>Foodie</h2>
          <p>Delicious food delivered to your doorstep.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@foodie.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Foodie. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;