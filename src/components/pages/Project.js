import React, { useState } from "react";
import GridLayout from "react-grid-layout";

const styles = {
  projectImage: {
    width: "300px",
    padding: "5px",
    height: "300px",
    objectFit: "cover",
  },

  work: {
    // display: "grid",
    // gridTemplateColumns: "2fr 3fr 3fr",
    // gridTemplateRows: "150px",
    // gap: "10px",
    // gridAutoRows: "minmax(75px, auto)",
    width: "100%",
    alignItems: "center",
    color: "white",
  },

  workLink: {
    color: "white",
    display: "block",
  },
};

export default function Project(props) {
  const layout = [
    { i: "1", x: 0, y: 0, w: 10, h: 10 },
    { i: "2", x: 10, y: 0, w: 2, h: 5 },
    { i: "3", x: 0, y: 10, w: 2, h: 5 },
    { i: "4", x: 5, y: 10, w: 2, h: 5 },
    { i: "5", x: 10, y: 10, w: 2, h: 5 },
  ];
  return (
    <div className="container">
      <article className="work" id="work" style={styles.work}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          {props.projects.map((item) => (
            <section key={item.id}>
              <figure>
                <div className="card-text">
                  <h3 className="card-header">{item.title}</h3>
                  <img
                    className="project-image"
                    style={styles.projectImage}
                    src={item.project_image}
                  ></img>
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
        </GridLayout>
      </article>
    </div>
  );
}
