import React, { useState } from "react";

const styles = {
  projectImage: {
    maxWidth: "300px",
    padding: "5px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "25px",
  },
  work: {
    display: "grid",
    gridTemplateColumns: "2fr 2fr 2fr",
    gridTemplateRows: "auto",
    gap: "10px",
    gridAutoRows: "minmax(max-content, 2fr)",
    width: "100%",
    color: "black",
    marginTop: "20px",
  },

  workLink: {
    color: "black",
    display: "block",
  },

  cardFormat: {
    backgroundColor: "var(--offwhite)",
    borderRadius: "25px",
    textAlign: "center",
  },
};

export default function Project(props) {
  return (
    <div className="container">
      <article className="work" id="work" style={styles.work}>
        {props.projects.map((item) => (
          <div key={item.id}>
            <div className="card-text" style={styles.cardFormat}>
              <h3>{item.title}</h3>
              <img src={item.project_image} style={styles.projectImage}></img>
              <a
                className="card-body-link"
                href={item.deployed_link}
                target="_blank"
                rel="noreferrer"
                style={styles.workLink}
              >
                Link to Deployed Project
              </a>
              <a
                className="card-body-link"
                href={item.git_link}
                target="_blank"
                rel="noreferrer"
                style={styles.workLink}
              >
                Link to Github Repository
              </a>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
}
