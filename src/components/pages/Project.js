import React, { useState } from "react";

const styles = {
  work: {
    display: "grid",
    gridTemplateColumns: "2fr 2fr 2fr",
    gridTemplateRows: "200px 200px",
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
};

export default function Project(props) {
  return (
    <div className="container">
      <article className="work" id="work" style={styles.work}>
        {props.projects.map((item) => (
          <section
            key={item.id}
            style={{
              backgroundImage: `url(${item.project_image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "25px",
            }}
          >
            <figure>
              <div className="card-text">
                <h3 className="card-header">{item.title}</h3>
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
            </figure>
          </section>
        ))}
      </article>
    </div>
  );
}
