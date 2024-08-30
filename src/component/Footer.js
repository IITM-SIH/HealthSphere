import React, { Component } from "react";
import "./asset/css/Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2>Health Sphere</h2>  
          </div>  
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="/faq">FAQs</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li> 
            </ul> 
          </div>
          <div className="footer-section">
            <h4>Find us on</h4>
            <ul className="social-links">
              <li>
                <a
                  href="https://www.facebook.com/mavenclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/mavenclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/maven-clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Health Sphere. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
}
