import React, { useState } from "react";
import resume from "/Users/natalie/Desktop/school_work/homework/react-bulgern-portfolio/src/images/NatalieBulger_Resume.pdf";
import resumeScreenshot from "../../images/resume_screenshot.png";

const styles = {
  container: {
    color: "white",
    fontSize: "18px",
    marginTop: "10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },

  contactLink: {
    color: "white",
    pointer: "cursor",
    textDecoration: "none",
    fontSize: "18px",
  },

  screenshot: {
    height: "300px",
  },

  figCaption: {
    textAlign: "center",
  },
};

export default function Resume(props) {
  return (
    <div className="container" style={styles.container}>
      <div>
        <h3>Proficiencies</h3>
        <ul>
          {props.proficiencies.map((item) => (
            <li>{item.skill}</li>
          ))}
        </ul>
      </div>
      <a
        href={resume}
        target="_blank"
        rel="noreferrer"
        style={styles.contactLink}
      >
        <figure style={styles.figCaption}>
          <figcaption>Click to Download</figcaption>
          <img
            src={resumeScreenshot}
            style={styles.screenshot}
            title="Click to Download"
          ></img>
        </figure>
      </a>
    </div>
  );
}
