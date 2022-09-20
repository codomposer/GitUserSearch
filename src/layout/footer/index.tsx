import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span></span>
        <nav>
          <ul>
            <li>API requests</li>
            <li>
              <div className="result">Search: <span>26</span></div>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
