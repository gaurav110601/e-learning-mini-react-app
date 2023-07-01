import React from 'react';
import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer-page">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-heading">Get in Touch</h2>
          <p className="footer-text"><b>As an experienced educator and lifelong learner, I am thrilled to share my knowledge
and expertise with students from around the world.</b><br/></p>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <ul className="footer-list">
            <li className="footer-list-item">
              <i className="fas fa-map-marker-alt footer-icon"></i>
              <p className="footer-item-text">BALOTRA, RAJASTHAN, 344022</p>
            </li>
            <li className="footer-list-item">
              <i className="fas fa-phone-alt footer-icon"></i>
              <p className="footer-item-text">+91 7014274820</p>
            </li>
            <li className="footer-list-item">
              <i className="fas fa-envelope footer-icon"></i>
              <p className="footer-item-text"><a href="mailto:gaurav.20jics018@jietjodhpur.ac.in">gaurav.20jics018@jietjodhpur.ac.in</a></p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
