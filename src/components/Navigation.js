import React, { useState } from "react";

export default function Navigation() {
  return (
    <div className="container">
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#work">Portfolio</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
          <li>
            <a href="#contact-me">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
