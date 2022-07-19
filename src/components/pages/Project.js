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
    display: "flex",
    flexWrap: "wrap",
    margin: "20px",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },

  workLink: {
    color: "black",
    display: "block",
  },

  cardFormat: {
    backgroundColor: "var(--beigeblue)",
    borderRadius: "25px",
    textAlign: "center",
    padding: "5px",
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
