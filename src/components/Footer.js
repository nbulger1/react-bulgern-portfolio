import React from "react";
import resume from "/Users/natalie/Desktop/school_work/homework/react-bulgern-portfolio/src/images/NatalieBulger_Resume_June2022.pdf";

const styles = {
  contactHeader: {
    color: "black",
    display: "flex",
    justifyContent: "center",
    margin: "10px",
  },

  contactNavList: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  contactLink: {
    color: "black",
    pointer: "cursor",
    textDecoration: "none",
    fontSize: "18px",
  },

  footer: {
    position: "fixed",
    bottom: 0,
    minWidth: "100%",
    maxWidth: "100%",
    height: "100px",
    backgroundColor: "var(--beigeblue)",
  },
};

export default function Footer() {
  const github = "https://github.com/nbulger1";
  const linkedin = "https://www.linkedin.com/in/natalie-bulger-6467b4b0/";

  return (
    <div className="container" style={styles.footer}>
      <footer className="more-info" id="more-info">
        <h3 style={styles.contactHeader}>More Information</h3>
        <nav className="contact-nav">
          <ul style={styles.contactNavList}>
            <li>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                style={styles.contactLink}
              >
                Github
              </a>
            </li>
            <li>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                style={styles.contactLink}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                style={styles.contactLink}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
