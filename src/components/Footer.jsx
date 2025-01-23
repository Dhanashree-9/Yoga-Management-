// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Golden Horizon Yoga</h2>
        </div>

        <div className="footer-info">
          <p>123 Fitness Street, Fit City, Pune</p>
          <p>Email: contact@GoldenHorizonYoga.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="footer-socials">
          <a href="https://facebook.com/GoldenHorizonYoga" target="_blank" rel="noopener noreferrer">
            <img src="/public/icons8-facebook.svg" alt="Facebook" />
          </a>
          <a href="https://twitter.com/GoldenHorizonYoga" target="_blank" rel="noopener noreferrer">
            <img src="/public/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://instagram.com/GoldenHorizonYoga" target="_blank" rel="noopener noreferrer">
            <img src="/public/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
