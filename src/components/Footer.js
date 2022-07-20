import React from "react";

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
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },

  contactLink: {
    color: "black",
    pointer: "cursor",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default function Footer() {
  const github = "https://github.com/nbulger1";
  const linkedin = "https://www.linkedin.com/in/natalie-bulger-6467b4b0/";
  const stackOverflow =
    "https://stackoverflow.com/users/17662397/natalie-bulger";

  return (
    <div className="container">
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
              href={stackOverflow}
              target="_blank"
              rel="noreferrer"
              style={styles.contactLink}
            >
              Stack Overflow
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
