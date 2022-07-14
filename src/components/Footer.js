import React from "react";

export default function Footer() {
  const github = "https://github.com/nbulger1";
  const linkedin = "https://www.linkedin.com/in/natalie-bulger-6467b4b0/";
  const resume =
    "https://github.com/nbulger1/bulgern-portfolio/blob/main/assets/images/NatalieBulger_Resume_June2022.pdf";

  return (
    <div className="container">
      <footer className="more-info" id="more-info">
        <aside>
          <h1>More Information</h1>
        </aside>
        <nav className="contact-nav">
          <ul>
            <li>
              <a href={github} target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
